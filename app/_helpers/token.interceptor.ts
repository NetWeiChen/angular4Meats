import { Injectable } from '@angular/core';
import { HttpRequest,
    HttpErrorResponse,
        HttpResponse,
        HttpHandler,
        HttpEvent,
        HttpInterceptor 
    } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { UserService } from '../_services/index';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor ( public userService: UserService) {} 
    intercept( request: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        const idToken = this.userService.getToken();
        if (idToken)
        {
            const clonedReq = request.clone({
            setHeaders: {
                //Authorization: 'Bearer $(this.userServie.getToken()}'
                Authorization: 'Bearer '+idToken
            }
         });
         return next.handle(clonedReq).
         do((event:HttpEvent<any>) => {
             if(event instanceof HttpResponse ) {
                 console.log("Interceptor works event = " + event);
             }
            }, (err : any ) => {
                if ( err.status === 401 ){
                    //navigate the user to login route
                }
            })
        } else  {
            return next.handle(request);
        }
        
    }
}