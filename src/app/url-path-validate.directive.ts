import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUrlPathValidate]'
})
export class UrlPathValidateDirective {

  el: any;

  constructor(el: ElementRef) { 
    this.el = el;
  }

  // Regex for a url path
  urlRegex: any = /^(\w+\/?)+(\.html)?$/g;
  
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // Check if all all writable keys match the url structure
    if (event.keyCode > 47){
      let toCheck = this.el.nativeElement.value + event.key;
      if (!(this.urlRegex.test(toCheck))) {
        event.preventDefault();
      }
    }
    // Catch the space character
    else if (event.keyCode == 32) { 
      event.preventDefault();
    }
  }

}
