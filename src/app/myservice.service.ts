import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  apiURL: string = 'https://restcountries.eu/rest/v2/all?fields=name;capital;region';
  userGetURL: string = 'https://jsonplaceholder.typicode.com/posts';


  httpLoginHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { };

  public getContries(): Observable<any> {
    let data = this.http.get(`${this.apiURL}`);
    return data;
  };

  public getUsers(): Observable<any> {
    return this.http.get(`${this.userGetURL}`);
  }


  /* Please check interceptor for error handling */


}
