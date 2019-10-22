import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasdataService {
  public sink = new Subject<spcontainer>();
  spdata: spcontainer = null;
  constructor() { }
}
