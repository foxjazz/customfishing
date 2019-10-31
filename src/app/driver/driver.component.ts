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
  public list = [];
  constructor(private ds: HasdataService) {
    this.hds = ds;
  }


  ngOnInit() {
    this.hds.splist.subscribe(a => {
      if (a != null) {
        this.splistData = a;
        this.list = a.list;
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

  createNewCol(){
    if (this.selected == undefined)
      return;
    const spd: spdata = {title: this.splistData.list[this.selected].title, selectCss: "normal", child: null, id: 1, content: "", level: 1, isSelected: false, indentCss:"", indentStep: 0}
    this.hds.addCol(spd);
  }
  createRow() {
    if (this.selected == undefined)
      return;
    const spd: spdata = {title: this.splistData.list[this.selected].title, selectCss: "normal", child: null, id: 1, content: "", level: 1, isSelected: false, indentCss:"", indentStep: 0}
    this.hds.addRow(spd);
  }
  createMainRow(){
    if (this.selected == undefined) {
      return;
    }
    const spd: spdata = {title: this.splistData.list[this.selected].title, selectCss: "normal", child: null, id: 1, content: "", level: 1, isSelected: false, indentCss:"", indentStep: 0}
    const d = new Array<spdata>();
    d.push(spd);
    const v: vert = {spdataList: d };
    const vz: vert[] = new Array<vert>();
    vz.push(v);
    const h: hz = {verts: vz, rowCssType:"normal"};
    this.hds.addMainRow(h);
  }
}
