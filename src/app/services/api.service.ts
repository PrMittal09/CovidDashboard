import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sharedData:string="india";
  baseUrl="https://api.covid19api.com/total/country/";
  constructor( private http:HttpClient) { 

  }
  getData(country:string) {
    return this.http.get(this.baseUrl+country);
  }

  getShareData() {
    return this.sharedData;
  }
}
