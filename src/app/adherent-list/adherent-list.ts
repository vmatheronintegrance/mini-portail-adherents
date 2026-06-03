import { Component, OnInit } from '@angular/core';
import { AdherentCard } from "../adherent-card/adherent-card";
import { Adherent } from '../models/adherent';
import { AdherentsService } from '../services/adherents-service';

@Component({
  selector: 'app-adherent-list',
  imports: [AdherentCard],
  templateUrl: './adherent-list.html',
  styleUrl: './adherent-list.scss',
})
export class AdherentList implements OnInit {
  adherents!: Adherent[];
  adherentsFiltres!: Adherent[];
  selectedAdherent?: Adherent;

  constructor(private adherentsService: AdherentsService) {}

  ngOnInit(): void {
    this.adherents = this.adherentsService.getAll();
  }
  
  gererVoirDetail($event: Adherent) {
    $event.nom = $event.nom.toUpperCase();
  }

  recherche($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    
    this.adherentsFiltres = this.adherents.filter(el => el.nom.startsWith(value));
  }

  onAdherentSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const adherentId = Number(select.value);

    if (!select.value) {
      this.selectedAdherent = undefined;
      return;
    }

    this.selectedAdherent = this.adherents.find(
      adherent => adherent.id === adherentId
    );
  }
 
}
