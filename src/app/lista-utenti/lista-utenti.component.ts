import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {User} from "../model/user";

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.scss']
})
export class ListaUtentiComponent implements OnInit {

  users: any[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.sessionStorage.getItem('token')) {
      this.router.navigate(['/']);
      return;
    }

    this.apiService.getUsers()
        .subscribe( data => {
          console.log(data)
          this.users = data.result;


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

}
