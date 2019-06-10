import { Component, OnInit } from '@angular/core';
import {DispositivoService} from "../services/dispositivo.service";
import {Dispositivo} from "../model/dispositivo";



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  constructor(private dispositiviservice:DispositivoService) { }


  listadispositivi = [];


  ngOnInit() {
      this.dispositiviservice.prendituttidispositivi().subscribe(result => {
          this.listadispositivi = result;
      });
  }

}
