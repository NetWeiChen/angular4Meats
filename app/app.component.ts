import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as _ from 'underscore';
import {pagerService } from './_services/pager.service';
import { UserService } from './_services/user.service';
// import { CORE_DIRECTIVES } from 'angular2/angular2';
import {IUser } from './home/User';
import { NavbarService } from './_services/navbar.service';


import { OnDestroy } from '@angular/core';
import { MessageService } from './_services/index';
import { Subscription } from 'rxjs/Subscription';
@Component({
    
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
  
    providers: [pagerService, UserService, MessageService]
})


//export class AppComponent implements OnInit {
    export class AppComponent implements OnInit, OnDestroy {
    iusers : IUser[];
    message: any;
    subscription:Subscription;
    constructor(private http:Http, private pagerService: pagerService, private userService :UserService, public nav:NavbarService, private messageService: MessageService ){

    }
    ngOnInit() : void {
        this.nav.show();
        
        // this.userService.getUsers(  )
        // .subscribe(iusers => {
        //     this.iusers = iusers;
        //     // console.log("ngOnInit, users = " +JSON.stringify(this.iusers));
        //     //console.log("Returned date array is " + buildAvailableArray())
        // });
        
    
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    };
   

 }