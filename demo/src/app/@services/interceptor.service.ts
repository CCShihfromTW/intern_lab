import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor-----------------------------");
    console.log(req);
    console.log("=======================================");
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse){
          console.log(event.body);
        }
        return event;
      })
    );
  }
}
