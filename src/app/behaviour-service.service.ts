import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourServiceService {

  private userContactList = new BehaviorSubject<any>([]);
  cast = this.userContactList.asObservable();

  constructor() { }

  dataAsItChanges(dataReceived) {
    this.userContactList.next(dataReceived);
  }



}
