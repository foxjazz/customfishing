import {Component, Input, OnInit} from '@angular/core';
import {HasdataService} from '../hasdata.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent  {
  public data: spdata;
  public hasData: boolean;
  public color: string;
  public selCss: string;
  public rownumber: number;
  public isSelected = false;
  public direction: string;
  private pass: number;
  private hds: HasdataService;
  @Input() set setdata(d: spdata) {
    this.data = d;
  }
  constructor(private ds: HasdataService) {
    this.hds = ds;
    this.selCss = "normal";
    this.hasData = false;
    this.hds.clearSink.subscribe(() => {
      if(this.hds.pass != this.pass) {
        this.data.isSelected = false;
        this.selCss = "normal";
      }
    });
  }
  select() {
    // this.direction = s;
    this.hds.clearSink.next(true);
    this.pass = this.hds.pass + 1;
    this.hds.pass = this.pass;
    this.data.isSelected = true;
    this.selCss = "highlight"
  }




}
