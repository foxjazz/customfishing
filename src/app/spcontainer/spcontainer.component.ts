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
  constructor(private ds: HasdataService) {

    this.dataService = ds;

  }

  ngOnInit() {
    this.dataService.sink.subscribe(cd => {
      this.list = cd.list;
    });
    this.populateData();
  }

  populateData() {
    // let a =
      this.c = ({list: []});
      let r: sprow = ({siblings: [], rowtype: "c1"});

      this.c.list.push(r);
      let a: spdata = ({title: "title 1", child: null, level: 1, content: "mycontent", id: 1})
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

      this.dataService.sink.next(this.c);

  }

}
