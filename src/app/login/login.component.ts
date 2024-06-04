import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  handleLogin(){
    // console.log(this.username)  
    // console.log(this.password)

    if(this.username=="pradeephv" && this.password=="dummy")
      {
        this.router.navigate(['welcome'])  /// welcome is path
        
        this.inValidLoginin=false;
      }
      else{
        this.inValidLoginin=true
      }
  }

}
