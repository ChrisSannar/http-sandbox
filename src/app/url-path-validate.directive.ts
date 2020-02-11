import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUrlPathValidate]'
})
export class UrlPathValidateDirective {

  el: any;

  constructor(el: ElementRef) { 
    this.el = el;
  }
  
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    let keyCodeValue: any = event.keyCode;
    
    // Turns out Chrome has a bug. This makes sure that it's covered
    if (event.keyCode === 0) {
      keyCodeValue = event.key.charCodeAt(0);
    }

    // Check if all writable keys match the url structure
    if (keyCodeValue > 47){
      let toCheck = this.el.nativeElement.value + event.key;
      
      // The regex for a url path
      if (!(/^(\w+\/?)+(\.html)?$/g.test(toCheck))) {
        event.preventDefault();
      }
    }
    // Catch the space character
    else if (keyCodeValue === 32) {
      event.preventDefault();
    }
  }

}
