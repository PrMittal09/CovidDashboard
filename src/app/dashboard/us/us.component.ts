import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  country:string="us";
  data:any="";

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.sendData();
  }

  @Output() coviddata = new EventEmitter<string>();

  sendData() {
    this.apiservice.getData(this.country).subscribe(
      (results: any) => {
        try {
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
