import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedin: boolean 
  constructor(private hardcodedauthenticationservice : HardcodedAuthenticationService
    
  ) { }

  ngOnInit() {
    // this.isUserLoggedin=this.hardcodedauthenticationservice.isUserLoggedIn()
  }

}
