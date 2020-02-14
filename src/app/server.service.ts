import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../assets/config';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private serverResponse: Observable<any>;
  private http: HttpClient;
  
  constructor(http: HttpClient) {
    this.http = http;
    // *** To be replaced with the HTTP response (and properly formated)
    this.serverResponse = new Observable(ob => {
      
      let temp = '';
      let interval = setInterval(() => {
        temp += 'a';
        ob.next(temp);
      }, 1000);

      return {
        unsubscribe() {
          clearInterval(interval);
        }
      }
    });
    // ***

   }

  sendServerRequest(req) {

  }

  getServerResponse() {
    return this.serverResponse;
  }

  buildUrlFromRequest(requriements): string {
    return `${ config.host }`;
  }
}
