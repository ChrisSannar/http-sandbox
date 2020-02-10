import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  @Input() public urlData: String;

  constructor() { }

  ngOnInit(): void {
  }

  // urlChange($event): void {
  //   this.urlChangeEvent.emit($event);
  // }

}
