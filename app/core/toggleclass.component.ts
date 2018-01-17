import { Component } from '@angular/core';

@Component ( {
    moduleId: module.id,
    selector:'toggleclass',
    template:`
        <div class="content-wrapper">
        <p [class.active]="isParaActive">This is a paragraph tag text</p>

        <button [class.active]="isBtnActive" (click)="clickMe()">Toggle Menu</button>
        </div>
        `,
    styles:[
            `
            p{
                color:red;
            }
            p.active{
                color:green;
            }
            button{
                background-color:#00BCD4;
                color:#ffffff;
            }
            button.active{
                box-shadow:0px,0px 3px,3px rgba(0,0,0,0,4);
            }
            `
        ],
})

export class ToggleclassComponent {
    constructor(){

    }
    isParaActive:boolean = false;
    isBtnActive:boolean = false;
    clickMe(){
        //alert('menuDisplayed is called');
        this.isParaActive = !this.isParaActive;
        this.isBtnActive = !this.isBtnActive;
       
    }
}

