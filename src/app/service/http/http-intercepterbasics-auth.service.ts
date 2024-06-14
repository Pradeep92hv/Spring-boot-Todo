import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let username = "admin";
    let password = "admin";

    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);

    let clonedRequest = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    });

    return next.handle(clonedRequest);
  }
}
