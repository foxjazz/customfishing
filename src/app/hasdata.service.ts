import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasdataService {
  public sink = new Subject<spcontainer>();
  public canArrange = new Subject<boolean>();
  spdata: spcontainer = null;
  constructor() { }

  refresh(){
    this.sink.next(this.spdata);
  }
}
