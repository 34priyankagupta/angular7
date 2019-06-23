import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';

@Injectable({
    providedIn: 'root'
})
export class UserResolverService implements Resolve<any> {
    
    constructor(private myServ: MyserviceService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log("resolving data");
        return this.myServ.getUsers();
    }
}