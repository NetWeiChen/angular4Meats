import { SptoolUser } from '../_models/user';
import { Component, NgModule, EventEmitter,Input, Output } from '@angular/core';
import {sptoolUser } from './spttoluser';


@Component ({
    moduleId: module.id,
    selector: 'sptool-user-list',
    templateUrl: 'sptoolUserList.Component.html',
    // inputs:['parentValue'],
    // outputs:['childhanged']
})

export class sptoolUserListComponent {
@Input() parentMessage:string;

childMessage: string = "Hello from child";
@Output() messageEvent = new EventEmitter<string>();


sendMessageToParent() {

    this.messageEvent.emit(this.childMessage);
}

selectedUser : sptoolUser =  new sptoolUser(2,'wei');

// parentValue:string;
// childChanged = new EventEmitter<string>();


sptoolUsers = [
    new sptoolUser(1,'steven'),
    new sptoolUser(2,'wei'),
    new sptoolUser(3,'arina'),
    new sptoolUser(4,'woo')
];


// onChange( value:string){
//     this.childChanged.emit(value);
// }
//please note the necessarity of deep clone here
onSelect( userId:number ){
    this.selectedUser = null;
    userId = Number(userId);
    var sptoolUsersClone = JSON.parse(JSON.stringify(this.sptoolUsers));
    for( var i = 0; i < sptoolUsersClone.length; i++) {
        if ( sptoolUsersClone[i].id == userId ) {
            this.selectedUser = sptoolUsersClone[i];
        }
    }
}

}