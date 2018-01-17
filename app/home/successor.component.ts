import { Component,OnInit, OnDestroy, Input } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { NavbarService } from '../_services/navbar.service';
import { MessageService } from '../_services/index';
import { Subscription } from 'rxjs/Subscription';
import {sptoolUserListComponent} from './sptoolUserListComponent';
@Component(
    {
        moduleId: module.id,
        // selector:'app-successor',
        templateUrl:'successor.component.html',
        //directives: [sptoolUserListComponent],
    }
)

export class successorComponent implements OnInit, OnDestroy {
    
    parentMessage:string = "static message from parent";
    childMessage: string;
    receiveMessageFromChild($event: any){
        this.childMessage = $event;
    }

    
    message: string;
    subscription : Subscription;
    constructor(public nav:NavbarService,private messageService: MessageService){
        this.subscription = this.messageService.getMessage().subscribe(
            message => { this.message = message; }
        );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.nav.show();
        
    }

    log(firstName:string){
        console.log("FirstName = " + firstName);
    }
}