import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todayDate!: Date;
  public amount!: number;
  public message!: string;

  constructor() { }

  ngOnInit(): void {
    this.todayDate = new Date();
    this.amount = 100;
    this.message = "Angular 8.0 is a Component Based Framework";
  }
}
