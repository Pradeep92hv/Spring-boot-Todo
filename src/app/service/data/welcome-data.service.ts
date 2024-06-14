import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanservice(){
    
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    
  }
  executeHelloWorldBeanserviceWithParameter(name){

    let basicsAuthHeaderString = this.createBasicAuthenticationHttpHeader()

    let headers= new HttpHeaders({
      Authorization : basicsAuthHeaderString
    })
    
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,{headers})
    
  }

  createBasicAuthenticationHttpHeader(){
    let username="admin"
    let password="admin"

    let basicsAuthHeaderString ="Basics" + window.btoa(username+":"+password)
    return basicsAuthHeaderString
  }
  
}
