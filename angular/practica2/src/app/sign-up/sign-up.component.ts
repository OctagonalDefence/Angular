import { Component } from '@angular/core';

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

  


}
