import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = new FormControl('');
  updateEmail() {
    this.email.setValue(this.email.value);
    if (this.email.value)
      alert("Email updated")
    else
      alert("Email is empty")
  }
}
