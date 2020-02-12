import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  header: string[];
  data: string;

  constructor(private service: ServerService) { }

  ngOnInit(): void {
    let temp = this.service.getServerResponse().subscribe((resp: string) => {
      this.data = resp;
      this.header = [resp];
    });
    setTimeout(() => { temp.unsubscribe() }, 5000);
  }

}
