import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent  {
  public data: spdata;
  public color: string;
  @Input() set setdata(d: spdata) {
    this.data = d;
  }
  constructor() { }



}
