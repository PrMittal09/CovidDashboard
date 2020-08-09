import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.scss']
})
export class IndiaComponent implements OnInit {
  country:string="india";
  data:any="";
  showloader:boolean=true;
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.sendData();
  }

  @Output() coviddata = new EventEmitter<string>();

  sendData() {
    
    this.apiservice.getData(this.country).subscribe(
      (results: any) => {
        try {
         this.showloader=false;
         this.data=results[results.length-1];
         this.coviddata.emit(this.data);
        } catch (error) {
          this.data="";
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
