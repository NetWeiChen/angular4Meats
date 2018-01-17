import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User, SptoolUser } from '../_models/index';

@Injectable()
export class loginedUserService {
    private subject = new Subject<any>();

    

    sendLoginedUser( message: string) {
        this.subject.next({firstName:message})
    }
    clearLoginedUser(){
        this.subject.next();
    }
    getLoginedUser():Observable<any>{
        return this.subject.asObservable();
    }
   
}