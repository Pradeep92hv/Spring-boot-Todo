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
    let basicAuthHeaderString=this.createBasicsAuthenticationHttpHeader()

    let headers= new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,{headers});
    
  }

  createBasicsAuthenticationHttpHeader(){
    let username ="pradeephv"
    let password ="dummy"
    let basicAuthHeaderString="Basics"+window.btoa(username +":"+password)

    return basicAuthHeaderString
  }
  
}
