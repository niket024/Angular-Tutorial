import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>I am from component file and my value is {{title}}</h1>
              <h2>I am a new line</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  test = 'I am changing'
}
