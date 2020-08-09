import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:String="";
  email:string="";
  message:String="";
  constructor() { }

  ngOnInit(): void {
  }

}
