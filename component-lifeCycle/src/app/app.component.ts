import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values = '';
  constructor() {
    this.values = 'I initialized from constructor'
  }
  ngOnInit() {
    this.values = "Hello";
  }

}
