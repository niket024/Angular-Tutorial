import { Component } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalcService]
})
export class AppComponent {
  title = 'Calculator';
  sum: number = 0;
  todaydate: Date | undefined;
  constructor(private calc: CalcService) { //dependencies injection

  }

  ngOnInit() {
    this.sum = this.calc.add(1, 2, 3, 4);
    this.todaydate = this.calc.todayDate();
  }
}
