import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  @Output() paramChange: EventEmitter<any> = new EventEmitter<any>();
  req: any;

  constructor() { }

  ngOnInit(): void {
    this.req = {
      type: 'GET',
      path: ''
    }
  }

  emitChange() {
    this.paramChange.emit(this.req);
  }

  typeChange($event) {
    const newVal = $event.target.value;
    switch(newVal) {
      case 'get': 
        this.req.type = 'GET';
        break;
    }
    this.emitChange();
  }

}
