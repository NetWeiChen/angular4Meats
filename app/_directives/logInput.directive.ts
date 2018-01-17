
// import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// @Directive({
//       selector: 'input[log-directive]',  
//       host: {
//         '(input)': 'onInput($event)'  
//       }
//     })

// export class LogDirective  {
//     @Input() public number:any;
//     @Input() public input: any;

//     constructor(private el:ElementRef){}

//       @HostListener('change') ngOnChanges() {  
//         console.log('change was invoked!' );
//       }

//     // oninput($event){
//     //     console.log($event.target.value);
//     }
// }