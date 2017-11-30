import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  person: any;
  user:any;
  users: any[];

  constructor() {
    this.person = {};
    this.user={};
    this.users = [];
   }

  ngOnInit() {
  }

  register() {
  this.users.push({'name':this.person.email,'password':this.person.password});
  alert("users"+this.users);
  console.log("this.users",this.users);
  }

  login(){
    var c=0;
    console.log("user",this.user);
    this.users.forEach(element => {
      console.log("element",element);
      if(element.name==this.user.email && element.password == this.user.password){
        c++;
      }
    });

    if(c!=0){
      alert("Welcome!"+this.user.name);
    }else {
      alert("Sorry! Wrong Credentials");
    }
    
  }
}
