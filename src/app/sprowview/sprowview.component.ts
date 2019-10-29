import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {HasdataService} from '../hasdata.service';

@Component({
  selector: 'app-sprowview',
  templateUrl: './sprowview.component.html',
  styleUrls: ['./sprowview.component.css']
})
export class SprowviewComponent implements OnInit {

  public dataSvs;
  public row;
  public cclass="";

  public canArrange = true;
  public arrange = false;
  public columns: hz[];
  constructor(private svs: HasdataService) {
    this.dataSvs = svs;
    this.columns = [];
    this.svs.canArrange.subscribe(a => this.canArrange = a);
  }
  ngOnInit() {
   this.dataSvs.rowSink.subscribe(sp => {
     const cdx = this.columns.length - 1;
     const idx = this.columns[cdx].verts.length - 1;
     if (this.columns[cdx].verts[idx].spdataList == null){
       this.columns[cdx].verts[idx].spdataList = new Array<spdata>();
     }
     this.columns[cdx].verts[idx].spdataList.push(sp);
   });

   this.dataSvs.colSink.subscribe(sp => {
     if (this.columns.length < 4) {
       const vert = new Array<vert>();
       vert.push(sp);
       const col: hz = {verts: vert, rowCssType: "normal"};
       this.columns.push(col);
     }
   });
  }
  public setConfig(cfg: string){
    this.cclass = cfg;
  }
  public setCanArrange(f: boolean){
    this.svs.canArrange.next(f);
    this.arrange = !f;
  }
  @Input() set blaster(h: hz) {
    this.columns.push(h);
  }
  @Input() set rowNumber(r: number){
    this.row = r;
  }

  @Input() set cssclass(cn: string){
    this.cclass = cn;
  }

  updateRowType(typ: string){
    this.cclass = typ;
    this.dataSvs.refresh();
  }





}
