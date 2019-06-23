import { Component, OnInit } from '@angular/core';
import { BehaviourServiceService } from '../behaviour-service.service';

@Component({
  selector: 'app-behv-subject',
  templateUrl: './behv-subject.component.html',
  styleUrls: ['./behv-subject.component.css']
})
export class BehvSubjectComponent implements OnInit {

  dataLength;

  constructor(private serv: BehaviourServiceService) { }

  ngOnInit() {
    this.serv.cast.subscribe(contactdata=>{
      this.dataLength = contactdata.length;
    })
  }

}
