import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showdata:boolean=false;
  constructor(private sharedService:ApiService) { }
  country:string="India";
  data:any ="";
  ngOnInit(): void {

  }

  receiveMessage($event) {
      this.data=$event;
      this.showdata=true;
  }

  selectInputValue(value:any) {
    if(value){
      this.country=value;
    }
    else {
      this.country="india";
    }
    this.showdata=false;
    this.sharedService.sendSharedData(this.country);
  }
}
