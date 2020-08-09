import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:String="";
  email:string="";
  message:String="";
  constructor(private route:Router) { }

  ngOnInit(): void {

  }

  onSubmit(formvalue:any) {
    alert("Thanks For Your Feedback");
    this.route.navigateByUrl('/dashboard');
  }

}
