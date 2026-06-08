import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  champInput: string = "";

  
  valider() {
    if(this.champInput.length > 5) {
      console.log("Valider");
    } else {
      console.log("Erreur");
    }
  }
}
