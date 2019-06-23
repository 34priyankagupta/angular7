import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private logn: AuthServiceService, private router: Router) { };

  /* CanActivate is the route-guard that allows state change only if it is true */
  canActivate(): boolean {
    console.log("canActivate")
    if (this.logn.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  };
}


