import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  name: string = "";

  submit() {
    if(this.name == "Nicolas") {
      console.log("Valide");
    } else {
      console.log("Invalide");
    }
  }

}
