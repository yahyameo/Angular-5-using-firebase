import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  public validateLogin(credentials) {
    return this.http.post(environment.apiUrl + '/login', credentials)
  }

  isUserLoggedIn() {
    if (localStorage.getItem('id')) {
      return true;
    }
    return false;
  }

}
