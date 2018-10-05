import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj: any;
  constructor() {
    this.obj = [{
      'labels': 'Content1',
      'templateUrl': 'assets/partials/sample.html'
    },
    {
      'labels': 'Content2',
      'templateUrl': 'assets/partials/sample1.html'
    }];
  }

}
