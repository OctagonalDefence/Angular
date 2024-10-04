import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
signUpForm: any;

  getLanguages(): string[] {
    return ['French', 'Spanish', 'Italian', 'German', 'English'].sort();
  } 

  constructor() {
    this.signUpForm = new FormGroup({
      user: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required),
      languages: new FormControl('', Validators.required)
    });
  }
  
  disabled() {
    if (this.signUpForm.controls['user'].value && this.signUpForm.controls['email'].value && this.signUpForm.controls['password'].value && this.signUpForm.controls['repeatPassword'].value && this.signUpForm.controls['languages'].value) {
      return true;
    } else {
      return false;
    }   
  }  
}
