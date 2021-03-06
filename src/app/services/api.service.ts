import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
//  baseUrl: string = 'http://87.27.62.247/users/';

  baseUrl: string = 'http://192.168.1.22:8080/';
//  baseUrl: string = 'http://localhost:8080/';

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('admin:ciao'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    console.log("eseguo la post");
    console.log(loginPayload);
    return this.http.post('http://87.27.62.247/' + 'oauth/token', loginPayload, {headers});
  }

  chisono():Observable<any> {
    return this.http.get('http://87.27.62.247/users/user/chisono?' + 'access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUsers() : Observable<any>{
    return this.http.get<any>(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: User){
    return this.http.post(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(this.baseUrl + 'user/' + user.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  deleteUser(id: number){
    return this.http.delete(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}
