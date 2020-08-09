import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private service:ApiService) { }
  country:string="india";
  sharedData:any="";
  showchart:boolean=false;
  ngOnInit(): void {
    
  }

  title = 'Bar Chart';

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true
  }

    labels = [];
  // labels ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

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
      backgroundColor: 'F44336'
    }
]

  getCountryData(){
    this.country=this.service.getShareData();
    this.service.getData(this.country).subscribe(
      (results: any) => {
        try {
         this.sharedData=results[results.length-1];
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
