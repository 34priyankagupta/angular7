import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-statistic-graph',
  templateUrl: './statistic-graph.component.html',
  styleUrls: ['./statistic-graph.component.css']
})
export class StatisticGraphComponent implements OnInit {

 
  allUsers: [];

  constructor(private mySer: MyserviceService) { }

  ngOnInit() {
    this.mySer.getUsers().subscribe((res) => {
      this.allUsers = res;
    })
  }


}
