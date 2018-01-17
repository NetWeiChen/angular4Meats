import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User, SptoolUser } from '../_models/index';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    sendMessage( message: string) {
        this.subject.next({textme:message});
    }

    sendLoginedUser( message: string) {
        this.subject.next({firstName:message})
    }
    clearLoginedUser(){
        this.subject.next();
    }
    getLoginedUser():Observable<any>{
        return this.subject.asObservable();
    }
    clearMessage() {
        this.subject.next();
    }

    getMessage():Observable<any> {
        return this.subject.asObservable();
    }
}