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
  public columns: hz;
  public setConfig(cfg: string){
    this.cclass = cfg;
  }
  public setCanArrange(f: boolean){
    this.svs.canArrange.next(f);
    this.arrange = !f;
  }
  @Input() set blaster(h: hz) {
    this.columns = h;
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
  constructor(private svs: HasdataService) {
    this.dataSvs = svs;
    this.svs.canArrange.subscribe(a => this.canArrange = a);
  }


  ngOnInit() {

  }

}
