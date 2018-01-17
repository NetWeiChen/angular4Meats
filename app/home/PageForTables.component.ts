import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { NavbarService } from '../_services/navbar.service';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Subscription } from 'rxjs/Subscription';
import * as _ from 'underscore';
import  {pagerService } from '../_services/pager.service';
import { MessageService } from '../_services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'PageForTables.component.html',
    
    providers: [pagerService]
})


export class PageForTablesComponent implements OnInit {
    // currentUser: User;
    // users: User[] = [];
    message: string;
    subscription : Subscription;

    private allItems : any[];
    pager: any = {};
   
    pagedItems: any[];
    ngOnInit() {
        this.nav.show();
        // this.loadAllUsers();

        this.http.get('http://localhost:7000/api/users/userNames' )
            .map((response: Response) => response.json())
            .subscribe( data => {
                this.allItems = data;
                this.setPage(1);
            });
        // this.http.get('./app/dummy-data.json')
        // .map((response:Response) => response.json())
        // .subscribe( data => {
        //     this.allItems = data;
        //     this.setPage(1);
        // });
    }


    
    setPage( page: number ) {
        if ( page < 1 || page > this.pager.totalPages ){
            return;
        }

        this.pager = this.pagerService.getPager(this.allItems.length,page);

        this.pagedItems = this.allItems.slice( this.pager.startIndex, this.pager.endIndex+1);
    }
    constructor(private http:Http, private pagerService: pagerService, public nav:NavbarService, private messageService: MessageService) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.subscription = this.messageService.getMessage().subscribe(
            message => { this.message = message; }
        );
    }

    // ngOnInit() {
    //     this.loadAllUsers();
    // }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }
}