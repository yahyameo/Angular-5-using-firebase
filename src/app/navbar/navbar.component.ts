import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from '../services/authguard.service';
import { LoginService } from '../services/login.service';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedInUser = ''
  ShowNavBar = false;
  constructor(private router: Router,
    private authService: AuthService,
        private loginService: LoginService

  ) {
   
  console.log(authService.user)
  }

  public isUserLoggedIn() {
  return this.authService.isLoggedIn();
    
  }
}
