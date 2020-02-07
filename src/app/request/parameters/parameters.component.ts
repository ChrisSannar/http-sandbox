import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  reqHost: String = '';
  reqPath: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
