import { Component } from '@angular/core';


@Component({
  selector: 'app-usuari',
  templateUrl: './usuari.component.html',
  styleUrls: ['./usuari.component.scss']
})
export class UsuariComponent {

  nom!: string;
  correu!: string;
  contrassenya!: string;
  repetirContrassenya!: string;
  idiomaSeleccionat!: string;

  isFormValid(): boolean {
    return !!(this.nom && this.correu && this.contrassenya && this.repetirContrassenya && this.idiomaSeleccionat);
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  idiomes: string[] = ['Català', 'Español', 'Anglés', 'Francés', 'Italià'];

  emplenaLanguages() { 
    return this.idiomes.map((idioma) => {
      return `<option value="${idioma}">${idioma}</option>`;
    }).join('');
  }

 

  submit() {
    if (!this.isFormValid()) {
      console.log("Assegura't d'omplir tots els camps");
    } else if (!this.isEmailValid(this.correu)) {
      console.log('El correu no es vàlid');
    } else if (this.contrassenya !== this.repetirContrassenya) {
      console.log('Les contrassenyes no son iguals');
    } else {
      console.log(this.nom, this.correu ,this.contrassenya, this.idiomaSeleccionat);
    }
  }
}
