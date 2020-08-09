import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  clickEventsubscription:Subscription;
  showloader:boolean=true;
  constructor(private service:ApiService) { }
  country:string="india";
  sharedData:any="";
  showchart:boolean=false;
  ngOnInit(): void {
    this.getCountryData(this.country);
    this.service.getSharedData().subscribe((data:any)=>{
      this.getCountryData(data);
    });
  }

  title = 'Bar Chart';

  chartOptions = {
    responsive: true
  }

  labels=[];

  chartData = [
    {
      label: 'Confirmed',
      data: []
    },
    { 
      label: 'Recoverd',
      data: []
    },
    { 
      label: 'Active',
      data: []
    },
    { 
      label: 'Deaths',
      data: []
    }
  ];

  colors = [
    { 
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    },
    { 
      backgroundColor: '#5CC62E'
    },
    {
      backgroundColor: '#F9C81D'
    },
    {
      backgroundColor: '#F44336'
    }
]

  getCountryData(countryname:string){
    this.labels[0]=countryname;
    this.service.getData(countryname).subscribe(
      (results: any) => {
        try {
         this.sharedData=results[results.length-1];
         this.showloader=false;
         this.chartData = [
            {
              label: 'Confirmed',
              data: [this.sharedData.Confirmed]
            },
            { 
              label: 'Recoverd',
              data: [this.sharedData.Recovered]
            },
            { 
              label: 'Active',
              data: [this.sharedData.Active]
            },
            { 
              label: 'Deaths',
              data: [this.sharedData.Deaths]
            }
        ]
        } catch (error) {
          this.sharedData="";
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
