import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanservice(){
    console.log("shs")
    return this.http.get('http://localhost:8080/hello-world')
    
  }
}
