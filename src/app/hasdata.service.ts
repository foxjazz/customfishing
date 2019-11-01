import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasdataService {
  public sink = new Subject<spcontainer>();
  public splist = new Subject<splist>();
  public rowSink = new Subject<spdata>();
  public colSink = new Subject<spdata>();
  public clearSink = new Subject<boolean>();
  public mainRowSink = new Subject<hz>();
  public canArrange = new Subject<boolean>();
  public getCols = new Subject<number>();

  spdata: spcontainer = null;
  public pass = 0;


  constructor() { }

  refresh() {
    this.sink.next(this.spdata);
  }

  public addMainRow(h: hz) {
    this.mainRowSink.next(h);
  }

  public addCol(sp: spdata) {
    this.colSink.next(sp);
  }
  public addRow(sp: spdata) {
    this.rowSink.next(sp);
  }
}
