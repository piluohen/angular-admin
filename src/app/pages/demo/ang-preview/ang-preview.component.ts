import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-preview',
  templateUrl: './ang-preview.component.html',
  styleUrls: ['./ang-preview.component.scss']
})
export class AngPreviewComponent implements OnInit {

  imgList: any = [
    { url: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
    { url: 'http://pic.58pic.com/58pic/15/14/29/47e58PICQUR_1024.jpg' },
    { url: 'http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg' },
    { url: 'http://pic26.nipic.com/20121221/9252150_142515375000_2.jpg' }
  ];

  previewVisible = false;

  previewIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick(index: any): void {
    this.previewVisible = true;
    this.previewIndex = index;
  }

}
