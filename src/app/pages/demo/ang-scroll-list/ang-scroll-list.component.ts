import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-scroll-list',
  templateUrl: './ang-scroll-list.component.html',
  styleUrls: ['./ang-scroll-list.component.scss']
})
export class AngScrollListComponent implements OnInit {

  list: any = [];

  constructor() { }

  ngOnInit() {
    this.createData();
  }

  createData() {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        title: `标题 ${i}`,
        desc: '描述'
      });
    }
  }

}
