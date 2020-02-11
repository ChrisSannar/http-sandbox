import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-header',
  templateUrl: './request-header.component.html',
  styleUrls: ['./request-header.component.scss']
})
export class RequestHeaderComponent implements OnInit {

  @Input() public content: String;

  constructor() { }

  ngOnInit(): void {
  }

}
