import { Component } from '@angular/core';


@Component({
  selector: 'app-usuari',
  templateUrl: './usuari.component.html',
  styleUrls: ['./usuari.component.scss']
})
export class UsuariComponent {

  nom!: string;
  correu!: string;
  password!: string;
  repeatPassword!: string;
  selectedLanguage!: string;

  isFormValid(): boolean {
    return !!(this.nom && this.correu && this.password && this.repeatPassword && this.selectedLanguage);
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  submit() {
    if (!this.isFormValid()) {
      console.log("Assegura't d'omplir tots els camps");
    } else if (!this.isEmailValid(this.correu)) {
      console.log('El correu no es vàlid');
    } else if (this.password !== this.repeatPassword) {
      console.log('Les contrassenyes no son iguals');
    } else {
      console.log(this.nom, this.correu ,this.password, this.selectedLanguage);
    }
  }
}
