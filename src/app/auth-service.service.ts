import { Injectable } from '@angular/core';
import { Logindata } from './logindata';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loginURL: string = `https://reqres.in/api/login`;

  httpLoginHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private route: Router) { }


  public loginService(data: Logindata): Observable<any> {
    return this.http.post(`${this.loginURL}`, data, this.httpLoginHeader)
  }

  /**
   * loggedIn: This method is to return true/false if token is available
   */
  public loggedIn() {
    return !!sessionStorage.getItem("token");
  }

  /**
   * loggedOut: This method clear available token for process of logout
   */
  public loggedOut() {
    sessionStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

}
