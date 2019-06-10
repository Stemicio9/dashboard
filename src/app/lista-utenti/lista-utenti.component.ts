import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {User} from "../model/user";
import {GruppiService} from "../services/gruppi.service";
import {Gruppo} from "../model/gruppo";
import {FormControl, Validators} from "@angular/forms";
import {ModalDirective} from "angular-bootstrap-md";
import {SequenzeService} from "../services/sequenze.service";
import {DispositivoService} from "../services/dispositivo.service";
import {Dispositivo} from "../model/dispositivo";
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.scss']
})
export class ListaUtentiComponent implements OnInit {

  users: any[];

  gruppi: Gruppo[] = [];

  loginFormModalPassword = new FormControl('', Validators.required);

  constructor(private router: Router, private apiService: ApiService, private gruppiservice:GruppiService, private sequenzaservice:SequenzeService, private dispositivoservice:DispositivoService) { }

  ngOnInit() {
 /*   if(!window.sessionStorage.getItem('token')) {
      this.router.navigate(['/']);
      return;
    }  */

 /*   this.apiService.getUsers()
        .subscribe( data => {
          console.log(data)
          this.users = data.result;


        });  */

 this.gruppiservice.getallgruppi().subscribe(result => {
   console.log(result);
   this.gruppi = result;
 });

  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
        .subscribe( data => {
          debugger
          this.users = this.users.filter(u => u !== user);
        })
  };

  editUser(user: User): void {
    window.sessionStorage.removeItem("editUserId");
    window.sessionStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['/admin/aggiungiutente']);
  };


  creagruppo(){
    var g = new Gruppo();
    g.idGruppo = 0;
    g.nomeGruppo = this.loginFormModalPassword.value;

    this.gruppiservice.creagruppo(g).subscribe(result => {
      console.log("GRUPPO SALVATO");
      this.gruppiservice.getallgruppi().subscribe(result => {
        this.gruppi = result;
      });
    });

  }


  rimuovidispositivodagruppo(disp,grup){
    var ind = grup.dispositivi.indexOf(disp);
    grup.dispositivi.splice(ind,1);

    this.gruppiservice.creagruppo(grup).subscribe(result => {
      this.gruppiservice.getallgruppi().subscribe(result => {
        this.gruppi = result;
      });
    });
  }

  aggiungidispositivo(gruppo){

  }

  @ViewChild('gestiscidispositivimodal') gestiscidispositivimodal: ModalDirective;
  listadispositivi:Dispositivo[] = [];
  dispositiviscelti:Dispositivo[] = [];
  gruppoperdispositiviselezionato;

  gestiscidispositivi(gruppo){



    this.dispositivoservice.prendituttidispositivi().subscribe(result => {
      this.listadispositivi = result;
      this.gruppoperdispositiviselezionato = gruppo;
      console.log(gruppo);
      this.gestiscidispositivimodal.show();
    });

  }

  spostadispositivoinselezionati(disp){
    var ind = this.dispositiviscelti.indexOf(disp);
    if(ind === -1) {
      this.dispositiviscelti.push(disp);
    }

  }

  salvadispositivi(){
    console.log(this.gruppoperdispositiviselezionato);
    var gruppo = this.gruppoperdispositiviselezionato;
    for(var d of this.dispositiviscelti){
      this.gruppiservice.assegnadispositivoagruppo(d,gruppo).subscribe(result => {
        console.log("DISPOSITIVO " + d.nomeDispositivo + " ASSEGNATO")
      } , error1 => {
        console.log("DISPOSITIVO " + d.nomeDispositivo + " NON ASSEGNATO")
      });
    }
  }

  rimuovidadispositiviselezionati(disp){
    var ind = this.dispositiviscelti.indexOf(disp);
    this.dispositiviscelti.splice(ind, 1);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
          event.previousIndex,
          event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex, event.currentIndex);
    }
  }
  @ViewChild('sceltasequenza') sceltasequenza: ModalDirective;
  grupposelezionato;
  sequenzascelta;

  tuttelesequenze;

  modificasequenza(gruppo){
     this.grupposelezionato = gruppo;
     this.sequenzaservice.getallsequenze().subscribe(result => {
       console.log(result);
       this.tuttelesequenze = result;
       this.sceltasequenza.show();
     });

  }

  sequenzasceltamodal(sequenza){
    // assegnare la sequenza al gruppo
    // ricaricare i gruppi
    console.log("SEQUENZA SCELTA = ");
    console.log(sequenza);

    console.log("Gruppo SCELTO = ");
    console.log(this.grupposelezionato);
    this.gruppiservice.assegnasequenzagruppo(sequenza, this.grupposelezionato).subscribe(result => {
      this.gruppiservice.getallgruppi().subscribe(result => {
        this.gruppi = result;
      });
    });
    this.sceltasequenza.hide();
  }







}
