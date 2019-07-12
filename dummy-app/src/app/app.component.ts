import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  array = [];

  ngOnInit() {
    for (let index = 0; index < 100; index++) {
      this.array.push(index);
    }
  }

}
