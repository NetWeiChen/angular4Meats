import { Component } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarService } from '../_services/navbar.service';
import { trigger, state, style} from '@angular/animations';
import { loginedUserService,MessageService } from '../_services/index';

import { User, SptoolUser } from '../_models/index';
import { UserService } from '../_services/index';
// import { EventEmitter } from 'events';
import { Subscription } from 'rxjs/Subscription';

@Component ( {
    moduleId: module.id,
    selector:'app-navbar',
    templateUrl:'navbar.component.html',
    styleUrls:['navbar.component.css'],
    animations:[
        trigger('sideMenuAnime', [
            state('close',style({width:'100px'})),
            state('open', style({width:'200px'})) 
        ]),
        
        trigger('mainContainerAnime', [
            state('close',style({marginLeft:'100px'})),
            state('open', style({marginLeft:'200px'})) 
        ]),
        ]
    
})

export class NavbarComponent {

    // receiveMessageFromChild($event:any){
    //     this.currentNavUser = $event;
    // }
    loginSubscription : Subscription;

    currentNavUserFirstName: string;
    currentNavUser:User;
    openClose:string = 'open';
    constructor( public nav:NavbarService, private loginedUserService: loginedUserService, private userService:UserService, private messageService:MessageService ){
        this.currentNavUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loginSubscription  = this.loginedUserService.getLoginedUser().subscribe(
            currentNavUserFirstName => { this.currentNavUserFirstName = currentNavUserFirstName;}
        ) 
    }

    ngOnDestroy(){
        this.loginSubscription.unsubscribe();
    }
    hideAndShow():void {
        this.openClose = (this.openClose === 'open')? 'close':'open';
        this.sendMessage(this.openClose);
        //alert('alert from hideAndShow ' + this.openClose );
    }
    sendMessage(textMsg:string):void{
        this.messageService.sendMessage(textMsg);
    }
    sendTextMessage():void{
        this.messageService.sendMessage("textMsg");
    }
    clearMessage():void {
        this.messageService.clearMessage();
    }  
    // toggledMenu : boolean = false;
    // onToggleMenu(){
    //     if ( this.toggledMenu === true){
    //         this.toggledMenu = false;
    //     } else {
    //         this.toggledMenu = true;
    //     }
    // }
}

