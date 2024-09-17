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

  submit() {
    if (this.password !== this.repeatPassword) {
      console.log('Les contrassenyes no son iguals');
    } else {
      console.log(this.nom, this.correu ,this.password, this.selectedLanguage);
    }
  }

}
