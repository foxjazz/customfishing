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
  public columns: vert[];
  constructor(private svs: HasdataService) {
    this.dataSvs = svs;
    this.columns = [];
    this.svs.canArrange.subscribe(a => this.canArrange = a);
  }
  ngOnInit() {
   this.dataSvs.rowSink.subscribe(sp => {
     const cdx = this.columns.length - 1;
     const idx = this.columns[cdx].spdataList.length - 1;
     if (this.columns[cdx].spdataList == null){
       this.columns[cdx].spdataList = new Array<spdata>();
     }
     this.columns[cdx].spdataList.push(sp);
   });

   this.dataSvs.colSink.subscribe(sp => {
     if (this.columns.length < 4) {
       const vert: vert = {spdataList: new Array<spdata>()}
       vert.spdataList.push(sp);
       this.columns.push(vert);
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
  @Input() set blaster(hz: hz) {
    this.columns = hz.verts;
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
