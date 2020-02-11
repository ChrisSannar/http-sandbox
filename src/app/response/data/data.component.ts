import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

// this is funny format to hold that unique string value
  @Input() respData: String = 
`Hello and Welcome to the 
HTTP Sandbox!

For instructions, send a 
GET request with an empty
path.
`;

  constructor() { }

  ngOnInit(): void {
  }

}
