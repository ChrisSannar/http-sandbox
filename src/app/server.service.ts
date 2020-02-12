import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private serverResponse: Observable<any>;
  
  constructor() {
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
}
