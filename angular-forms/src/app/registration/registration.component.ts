import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    if (this.userForm.valid) {
      alert('User form is valid!!')
      console.log(this.userForm.value)
    } else {
      alert('User form is not valid!!')
    }
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}

