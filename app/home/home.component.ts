import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { User, SptoolUser } from '../_models/index';
import { UserService, loginedUserService,MessageService } from '../_services/index';


import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Subscription } from 'rxjs/Subscription';
import * as _ from 'underscore';

import { NavbarService } from '../_services/navbar.service';



import { OnDestroy } from '@angular/core';
import { cursorTo } from 'readline';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    
    // providers: [pagerService]
})

export class HomeComponent implements OnInit, OnDestroy  {
    // @Output() loginedUserEvent = new EventEmitter<User>();

    // sendLoginedUserToNav(){
    //     this.loginedUserEvent.emit(this.currentUser);
    // }
    
    currentUser: User;
    users: User[] = [];
    sptoolusers : SptoolUser[] = [];
    message: string;
    subscription : Subscription;
    
    public  returnClass = "flexibleContainer";
    isFlexibleContainerDentable:false;
    
   
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.nav.show();
        this.loadAllSptoolsUsers();
        this.loadAllUsers();

        
        // this.http.get('./app/dummy-data.json')
        // .map((response:Response) => response.json())
        // .subscribe( data => {
        //     this.allItems = data;
        //     // this.setPage(1);
        // });
    }

   
    constructor(private userService: UserService,private http:Http,public nav:NavbarService, private messageService: MessageService,private loginedUserService:loginedUserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loginedUserService.sendLoginedUser(this.currentUser.firstName);
        this.subscription = this.messageService.getMessage().subscribe(
            message => { this.message = message; }

        );
       
        
    }

//    sendloginedUser(){
//        this.messageService.sendLoginedUser(this.currentUser);
//    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadAllSptoolsUsers() {
        this.userService.getAllSptoolUsers().subscribe(sptoolusers => { this.sptoolusers = sptoolusers;});
    }
}