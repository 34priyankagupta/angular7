import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private serv: AuthServiceService, private route: Router) { }
  intercept(req, next) {
    console.log("hitting interceptor with each rest call");

    if (this.serv.loggedIn()) {
      console.log("loggedin");
      
      let tokenizedReq = req.clone({
        // setHeaders: {
        //   // Authorization: `Bearer ${token}`
        //   Content-Type: 'application/json;charset=utf-8'
        // }
      })
      return next.handle(tokenizedReq).pipe(
        tap({
          next: (res) => {
            // console.log("tap next ", res);
          },
          error: (res) => {
            this.route.navigate(['/error'])
            // console.log("tap, error", res);
          },
          complete: () => {
            // console.log("tab completed");
          }
        }),
        retry(10),
        catchError(this.errorHandler)
      );

    } else {
      return next.handle(req);
    }
    // .pipe(
    // map((res)=> {
    //   console.log("map", res);
    // }),
    // tap({
    //   next: (res)=>{
    //     console.log("tap next ",res);
    //   },
    //   error: (res)=>{
    //     console.log("tap, error",res);
    //   },
    //   complete: () =>{
    //     console.log("tab completed");
    //   }
    // }),
    // retry(10),
    // catchError(this.errorHandler),


    // );
  }

  // }
  errorHandler(error: HttpErrorResponse) {
    console.log("Retried for 10 times.");
    // this.route.navigate(['/error']);
    return throwError(error.message);
  }

}
