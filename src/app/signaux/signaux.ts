import { Component, computed, effect, inject, input, signal, WritableSignal } from '@angular/core';
import { AdherentsService } from '../services/adherents-service';

@Component({
  selector: 'app-signaux',
  imports: [],
  templateUrl: './signaux.html',
  styleUrl: './signaux.scss',
})
export class Signaux {
  
  inputTest = input<string | undefined>(undefined);

  compteur: WritableSignal<number> = signal<number>(0);

  libelle = computed<string>(() => {
    return this.compteur() > 9 ? "Nombre" : "Chiffre";
  });


  // mySignal: Signal<T> = signal<T>();

  // Effect
  logEffect = effect(() => {
    console.log(this.compteur());
    console.log(this.libelle());
  });


  setValue(value: number) {
    this.compteur.set(value);    
  }

  increment() {
    this.compteur.update((valeur) => valeur + 1);
  }

}
