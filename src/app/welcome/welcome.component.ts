import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// export is used , to use the class outside the boundary
export class WelcomeComponent implements OnInit {


message  = 'welcome message'
  constructor() { }

  ngOnInit() : void {
    // this.message=5     compilation error, becuase  message is string
  }

}
