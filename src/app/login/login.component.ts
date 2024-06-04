import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="pradeephv"
  password=""
  errorMessage="Invalid Credential"
  inValidLoginin=false
  constructor() { }

  ngOnInit() {
  }
  
  handleLogin(){
    // console.log(this.username)  
    // console.log(this.password)

    if(this.username=="pradeephv" && this.password=="dummy")
      {
        this.inValidLoginin=false;
      }
      else{
        this.inValidLoginin=true
      }
  }

}
