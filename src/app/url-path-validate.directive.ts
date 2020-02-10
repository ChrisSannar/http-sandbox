import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUrlPathValidate]'
})
export class UrlPathValidateDirective {

  el: any;

  constructor(el: ElementRef) { 
    this.el = el;
  }

  // (^[\w\/]*)
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.keyCode > 47){
      let toCheck = this.el.nativeElement.value + event.key;
      console.log(toCheck, (/a/g.test(toCheck)));
      // event.preventDefault();
    } else {
      console.log(`KEY`, event.key);
    }
    
  }

}
