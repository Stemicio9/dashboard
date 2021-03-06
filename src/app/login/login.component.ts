import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {HttpParams} from "@angular/common/http";
import {MediaService} from "../services/media.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private mediaService: MediaService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.mediaService.prenditutto();
    this.router.navigate(['/admin/dashboard']);

    /*
    const body = new HttpParams()
        .set('username', this.loginForm.controls.username.value)
        .set('password', this.loginForm.controls.password.value)
        .set('grant_type', 'password');

    this.apiService.login(body.toString()).subscribe(data => {
      console.log(data);


      window.sessionStorage.setItem('token', JSON.stringify(data));
      console.log(window.sessionStorage.getItem('token'));

      this.apiService.chisono().subscribe(risultato => {
        console.log("CHI SONO");
        console.log(risultato);

        if(risultato.result.authorities[0].authority === 'ROLE_ADMIN'){
          this.router.navigate(['/admin/dashboard']);
        }

        else if(risultato.result.authorities[0].authority === 'ROLE_USER'){
          this.router.navigate(['/lavoratore/homelavoratore']);
        }

        else if(risultato.result.authorities[0].authority === 'ROLE_DATORE'){
          this.router.navigate(['/datore/homedatore']);
        }


      });
//      this.router.navigate(['list-user']);
    }, error => {
      alert(error.error.error_description);
    });  */
  }

  ngOnInit() {
    //   window.sessionStorage.removeItem('token');
    if (window.sessionStorage.getItem('token')){
      //    this.router.navigate(['list-user']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });






  }

}
