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
  params: any;
  urlData: String;
  header: String[];
  info: any;

  constructor() { }
  
  ngOnInit(): void {
    this.host = `${config.host}`;
    this.params = { path: '', type: 'GET'};
    this.info = {
      protocol: 'HTTP/1.1',
      accept: '*/*',
      userAgent: navigator.userAgent
    }
    this.updateURL();
    this.updateHeader();
  }

  paramChange($event) {
    this.params = $event;
    this.updateURL();
    this.updateHeader();
  }

  updateURL() {
    this.urlData = `${this.host}${this.params.path}`
  }

  updateHeader() {
    this.header = [
      `${this.params.type} ${this.params.path} ${this.info.protocol}`,
      `Host: ${this.host}`,
      `Accept: ${this.info.accept}`,
      `User-Agent: ${this.info.userAgent}`
    ];
  }

  sendRequest() {
    console.log(this.urlData);
  }

}
