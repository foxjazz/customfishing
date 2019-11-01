import {Component, Input, OnInit} from '@angular/core';
import {HasdataService} from '../hasdata.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-verticle',
  templateUrl: './verticle.component.html',
  styleUrls: ['./verticle.component.css']
})
export class VerticleComponent implements OnInit {

  @Input('setRows') rows: spdata[];
  @Input() index;
//  rows: spdata[];
  hds: HasdataService;
  public cclass="";
  constructor(private ds: HasdataService) {
    this.hds = ds;
  }

  ngOnInit() {
  }

  getDragDestoIndex(i: number): string {
    let idx = 0;
    if (i < 4)
      idx =  i + 1;
    if (i === 4)
      idx =  1;
    return "dropListDesto" + idx;
  }
  indentRight(i: number) {
    const obj = this.rows[i];
    if (obj.indentStep < 2){
      obj.indentStep += 1;
    }

  }
  indentLeft(i: number) {
    const obj = this.rows[i];
    if (obj.indentStep > 0) {
      obj.indentStep -= 1;
    }
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
}
