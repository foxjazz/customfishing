import { Component, OnInit } from '@angular/core';
import {HasdataService} from '../hasdata.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-spcontainer',
  templateUrl: './spcontainer.component.html',
  styleUrls: ['./spcontainer.component.css']
})
export class SpcontainerComponent implements OnInit {
  public arrange = false;
  public dataService: HasdataService;
  public c: spcontainer;
  public cdata: spcontainer;
  public list = null;
  public mainRows: hz[] = null;
  constructor(private ds: HasdataService) {

    this.dataService = ds;
    this.mainRows = [];

  }

  ngOnInit() {
    this.dataService.mainRowSink.subscribe(h => {

      this.mainRows.push(h);
    });
    this.populateData();
  }

  populateData() {
    // let a =
      const spd: spdata[] = new Array<spdata>();
      const spl: splist = {list: spd};

      let a: spdata = {title: "Suburu", child: null, level: 1, content: "mycontent", id: 1, selectCss: "normal", isSelected: false};
      spl.list.push(a);
      a = ({title: "BMW", child: null, level: 1, content: "mycontent", id: 2, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Toyota", child: null, level: 1, content: "mycontent", id: 3, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Mazda", child: null, level: 1, content: "mycontent", id: 4, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Infinity", child: null, level: 1, content: "mycontent", id: 5, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Porshe", child: null, level: 1, content: "mycontent", id: 6, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Dodge", child: null, level: 1, content: "mycontent", id: 7, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Ford", child: null, level: 1, content: "mycontent", id: 8, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Tesla", child: null, level: 1, content: "mycontent", id: 9, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Kia", child: null, level: 1, content: "mycontent", id: 10, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Chevy", child: null, level: 1, content: "mycontent", id: 11, selectCss: "normal", isSelected: false});
      spl.list.push(a);
      a = ({title: "Mercedes", child: null, level: 1, content: "mycontent", id: 12, selectCss: "normal", isSelected: false});
      spl.list.push(a);

      this.dataService.splist.next(spl);




/*
      let r: sprow = ({siblings: [], rowtype: "c1"});

      this.c.list.push(r);

      r.siblings.push(a);
      a = ({title: "title 2", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
      a = ({title: "title 3", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
      a = ({title: "title 4", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
      r = ({siblings: [], rowtype: "c2"});
      this.c.list.push(r);
      a = ({title: "title 5", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
      a = ({title: "title 6", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
      a = ({title: "title 7", child: null, level: 1, content: "mycontent", id: 1})
      r = ({siblings: [], rowtype: "c3"});
      this.c.list.push(r);
      a = ({title: "title 8", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
      a = ({title: "title 9", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
      a = ({title: "title 10", child: null, level: 1, content: "mycontent", id: 1})
      r.siblings.push(a);
*/




  }

}
