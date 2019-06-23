import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  @Input()
  userCount: Number

  @Output()
  public childEvent = new EventEmitter();

  @Output()
  public childEventToHide = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showTitle = ()=>{
    this.childEvent.emit("Showing All New Data, please press refresh to checkout new data")
  }

  hideTitle = ()=>{
    this.childEventToHide.emit("");
  }

}
