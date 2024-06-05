import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// export is used , to use the class outside the boundary
export class WelcomeComponent implements OnInit {


message  = 'welcome message'
getWelcomeMessagevalue: string
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
  ) { }

   name=""
  ngOnInit()  {
    // this.message=5     compilation error, becuase  message is string

    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']   //geting the path varible
  }


  getWelcomeMessage(){
    
    console.log(this.service.executeHelloWorldBeanservice())
    this.service.executeHelloWorldBeanservice().subscribe(
        response => this.handleSuccessfullResponse(response),
       error => this.handleErrorResponse(error)
          );
   

  }

  handleSuccessfullResponse(response)
  {

    this.getWelcomeMessagevalue=response.msg

    // console.log(this.getWelcomeMessagevalue)

  }

  handleErrorResponse(error)
  {
    //console.log(error.message)
    this.getWelcomeMessagevalue=error.message
  }

  
  getWelcomeMessageWithParameter(){
    
    console.log(this.service.executeHelloWorldBeanserviceWithParameter(this.name))
    this.service.executeHelloWorldBeanserviceWithParameter(this.name).subscribe(
        response => this.handleSuccessfullResponse(response),
       error => this.handleErrorResponse(error)
          );
   

  }


}
