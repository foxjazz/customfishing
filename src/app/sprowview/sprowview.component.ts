import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-sprowview',
  templateUrl: './sprowview.component.html',
  styleUrls: ['./sprowview.component.css']
})
export class SprowviewComponent implements OnInit {

  public row;
  public siblings: spdata[];
  @Input() set blaster(sib: spdata[]) {
    this.siblings = sib;
  }
  @Input() set rowNumber(r: number){
    this.row = r;
  }
  constructor() { }


  ngOnInit() {

  }

}
