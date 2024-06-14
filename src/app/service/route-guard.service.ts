import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    public router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
   if(this.hardcodedAuthenticationService.isUserLoggedIn())
    {
      return true
    }
      
    this.router.navigate(['login'])
  }
  
}
//hhh