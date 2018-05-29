import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const started = Date.now();

    console.log('hello first ..');
    if (localStorage.getItem('token') != null) {

      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(localStorage.getItem('token'));
      const expirationDate = helper.getTokenExpirationDate(localStorage.getItem('token'));
      const isExpired = helper.isTokenExpired(localStorage.getItem('token'));

      console.log('decoded toke ' + decodedToken);
      console.log('expirationDate ' + expirationDate);
      console.log('isExpired ' + isExpired);
    }
    //const xhr 
    if (this.authService.sendToken) {
      req = req.clone({

        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))

      });
    }

    // if (!this.authService.sendToken) { xhr.headers.delete('Authorization');} //do not send token when signup method id called

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      }, error => {
        if (error.status == 401) {
          console.error('Invalid credentials 401', error)
        }
        if (error.status == 403) {
          console.error('NICE ERROR 403', error)
        }
        if (error.status == 500) {
          console.error('Unknown Server ERROR 500', error)
        }
      })
    )

  }

  /*
  pipe(tap(
    (err: any) => {
      if (err instanceof HttpErrorResponse) {
       
        if (err.status === 401) {
          console.log ('from app.module.ts ' + 'error 401');
         // this.router.navigate(['user']);
        }
        if (err.status === 403) {
          console.log ('from app.module.ts ' + 'error 403');
         // this.router.navigate(['user']);
        }
      }
    } 
  ))
}; */
}
