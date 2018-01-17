import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive( { selector : '[highlight]'})

export class HightlightDirective {
    constructor(renderer: Renderer, el:ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor','blue');
        //above equivalent to below
        el.nativeElement.style.backgroundColor = 'gold';
    }
}