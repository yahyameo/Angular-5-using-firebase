import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from "../auth.service";


@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router:Router,private authService:AuthService) { 
   // localStorage.clear();
   
  }
  canActivate() {
      return this.authService.isLoggedIn();
    }    
  }

