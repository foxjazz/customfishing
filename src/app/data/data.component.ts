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
  private hds: HasdataService;
  @Input() set setdata(d: spdata) {
    this.data = d;
  }
  constructor(private ds: HasdataService) {
    this.hds = ds;
    this.selCss = "normal";
    this.hasData = false;
    this.hds.clearSink.subscribe(() => {
      this.data.isSelected = false;
    });
  }
  select() {
    // this.direction = s;
    this.hds.clearSink.next(true);
    this.data.isSelected = true;
  }




}
