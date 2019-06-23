import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<any> {

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.sev.getContries();
  }

  constructor( private sev: MyserviceService) { }
}
