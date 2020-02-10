import { Component, OnInit } from '@angular/core';
import { config } from '../../assets/config.js';

/**
 * Smart Component
 */
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  host: String;
  urlData: String;
  params: any;

  constructor() { }
  
  ngOnInit(): void {
    this.host = `${config.host}`;
    this.params = { path: '', type: ''};
    this.updateURL();
  }

  paramChange($event) {
    this.params = $event;
    this.updateURL();
  }

  updateURL() {
    this.urlData = `${this.host}${this.params.path}`
  }

  sendRequest() {
    console.log(this.urlData);
  }

}
