import { Component } from '@angular/core';
import { CalcService } from './calc.service';
import { Router } from "@angular/router";

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
  message:string = "";
  constructor(private router: Router, private calc: CalcService) { //dependencies injection

  }

  ngOnInit() {
    this.sum = this.calc.add(1, 2, 3, 4);
    this.todaydate = this.calc.todayDate();

    const loginPayload = {
      username: "admin",
      password: "admin"
    }
    this.calc.login(loginPayload).subscribe(data => {
      debugger;
      this.message = data.message;
    });
    this.calc.mapExample();
  }
}
