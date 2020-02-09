import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-header',
  templateUrl: './response-header.component.html',
  styleUrls: ['./response-header.component.scss']
})
export class ResponseHeaderComponent implements OnInit {

  headerText: String = 'qwer';

  constructor() { }

  ngOnInit(): void {
  }

}
