import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
//import { LoginService } from '../login.service';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    this.loginForm.value.email = this.loginForm.value.password = '';
    this.router.navigate(['']);


  }

    constructor(private loginService: LoginService, private router: Router, public authService: AuthService) {
      console.log('LoginComponent is called')
  }

}
