import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-countup',
  templateUrl: './ang-countup.component.html',
  styleUrls: ['./ang-countup.component.scss']
})
export class AngCountupComponent implements OnInit {

  value: any = 500;

  constructor() { }

  ngOnInit() {
  }

  handleChange() {
    this.value = Math.floor(Math.random() * 2000);
  }

}
