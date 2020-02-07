import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  urlData: String = 'asdf';

  constructor() { }

  ngOnInit(): void {
  }

}
