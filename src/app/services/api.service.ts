import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sharedData:string="india";
  baseUrl="https://api.covid19api.com/total/country/";

  private subject = new Subject<any>();

  constructor( private http:HttpClient) { }

  getData(country:string) {
    return this.http.get(this.baseUrl+country);
  }

  sendSharedData(country:string) {
    this.subject.next(country);
  }
  getSharedData(): Observable<any>{ 
    return this.subject.asObservable();
  }

}
