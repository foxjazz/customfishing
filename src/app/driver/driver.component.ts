import { Component, OnInit } from '@angular/core';
import {HasdataService} from '../hasdata.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public splistData: splist;
  private hds: HasdataService;
  private selected: number;

  constructor(private ds: HasdataService) {
    this.hds = ds;
  }


  ngOnInit() {
    this.hds.splist.subscribe(a => {
      if(a != null) {
        this.splistData = a;
      }
    });
  }
  select(i: number) {
    this.selected = i;
    for (const c of this.splistData.list){
      c.selectCss = "normal";
    }
    this.splistData.list[i].selectCss = "highlight";
  }
  createMidRow(){
    if (this.selected == undefined)
      return;
    const spd: spdata = {title: this.splistData.list[this.selected].title, selectCss: "normal", child: null, id: 1, content: "", level: 1}
    const d = new Array<spdata>();
    d.push(spd);
    const v: vert = {spdataList: d };
    const vz: vert[] = new Array<vert>();
    const h: hz = {verts: vz, rowCssType:"normal"};
    this.hds.addRow(h);
  }
}
