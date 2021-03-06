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
       this.svs.getCols.next(this.columns.length);
     }
   });
  }
  deleteSpData() {
          for(const c of this.columns){
            // tslint:disable-next-line:no-shadowed-variable
            let idx = 0;
            for (const item of c.spdataList){
              if (item.isSelected) {
                c.spdataList.splice(idx,1);
              }
              idx++;
            }
          }
          let idx = 0;
          for (const c of this.columns) {

            if (c.spdataList.length === 0) {
              this.columns.splice(idx, 1);
            }
            idx++;
          }
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








}
