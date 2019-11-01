import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {HasdataService} from '../hasdata.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sprowview',
  templateUrl: './sprowview.component.html',
  styleUrls: ['./sprowview.component.css']
})
export class SprowviewComponent implements OnInit {

  public dataSvs;
  public row;
  public cclass="";
  public onSubscribers = false;
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
     if (!this.onSubscribers) {
       return;
     }
     const cdx = this.columns.length - 1;
     for (const c of this.columns) {
       for (const tt of c.spdataList){
         if (tt.isSelected) {
            c.spdataList.push(sp);
         }
       }
     }
   });

   this.dataSvs.colSink.subscribe(sp => {
     if (!this.onSubscribers) {
       return;
     }
     if (this.columns.length < 4) {
       const v: vert = {spdataList: new Array<spdata>()};
       v.spdataList.push(sp);
       this.columns.push(v);
     }
   });
  }


  drop(event: CdkDragDrop<spdata[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  indentRight(i: number, ii: number) {
    const obj = this.columns[i].spdataList[ii];
    if (obj.indentStep === 1) {
      obj.indentStep = 2;
    }
    if (obj.indentStep === 0) {
     obj.indentStep = 1;
    }

  }
  indentLeft(i: number, ii: number) {
    const obj = this.columns[i].spdataList[ii];
    if (obj.indentStep === 1) {
      obj.indentStep = 0;
    }
    if (obj.indentStep === 2) {
      obj.indentStep = 1;
    }
  }
  public setConfig(cfg: string) {
    this.cclass = cfg;
  }
  public setCanArrange(f: boolean) {
    this.svs.canArrange.next(f);
    this.arrange = !f;
    this.onSubscribers = !f;
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
