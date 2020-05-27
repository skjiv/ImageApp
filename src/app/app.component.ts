import { Component, OnInit } from '@angular/core';

declare let jsPDF: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ImageApp';
  image = new Image();
  mark: string = '';

  // tslint:disable-next-line: align
  ngOnInit() {
    const username = '24264 ';
    for(let i=0; i<10000; i++) {
      this.mark += username;
    }
  }
}
