import { Component, OnInit, Input } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public fields: String[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
