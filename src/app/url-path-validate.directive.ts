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
    // Check if all writable keys match the url structure
    if (event.keyCode > 47){
      let toCheck = this.el.nativeElement.value + event.key;
      
      // The regex for a url path
      if (!(/^(\w+\/?)+(\.html)?$/g.test(toCheck))) {
        event.preventDefault();
      }
    }
    // Catch the space character
    else if (event.keyCode == 32) { 
      event.preventDefault();
    }
  }

}
