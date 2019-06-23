import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.css']
})
export class InfoContactComponent implements OnInit {

  @Input() totalContactDataRows;

  contactInfo: any;
  dataLength;

  constructor() { }

  ngOnInit() {
    // if(this.totalContactDataRows === undefined || 0){
    //   console.log("emptyyyy")
    //   this.contactInfo = "Why contact list is so empty!!"
    // }else{
    //   this.contactInfo = "Thats like a list!! Keep adding!"
    // }
    
  }

  ngOnChanges(changedData: SimpleChanges){
    this.totalContactDataRows = changedData.totalContactDataRows.currentValue;
    if(this.totalContactDataRows === undefined || 0){
      this.contactInfo = "Why contact list is so empty!!"
    }else{
      this.contactInfo = "Thats like a list!! Keep adding!"
    }
  }

}
