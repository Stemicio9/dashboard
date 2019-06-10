import {Component, OnInit, ViewChild} from '@angular/core';
import {SequenzeService} from "../services/sequenze.service";
import {Sequenza} from "../model/sequenza";
import {FormControl, Validators} from "@angular/forms";
import {ModalDirective} from "angular-bootstrap-md";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sequenze : Sequenza[] = [];
  numerosequenze;

  loginFormModalPassword = new FormControl('', Validators.required);

  constructor(private sequenzeservice:SequenzeService, private router:Router) {

  }


  ngOnInit(): void {
    this.sequenzeservice.getallsequenze().subscribe(result => {
      this.sequenze = result;
      this.numerosequenze = this.sequenze.length;
    });
  }


  salvasequenza(){
    var s = new Sequenza();
    s.nomeSequenza = this.loginFormModalPassword.value;
    s.idSequenza = 0;
    this.sequenzeservice.salvasequenza(s).subscribe(result => {
      console.log("FATTO");
    });
  }

  @ViewChild('demoBasic') demoBasic: ModalDirective;

  modaltitle = "";

  cliccato(sequenza){
    this.modaltitle = sequenza.nomeSequenza;
 //   this.demoBasic.show();
    var seq = new Sequenza();
    seq.idSequenza = sequenza.idSequenza;
    seq.nomeSequenza = sequenza.nomeSequenza;
    this.sequenzeservice.setsequenzaselezionata(seq);
    this.router.navigate(['/admin/modificasequenza']);
  }

}

