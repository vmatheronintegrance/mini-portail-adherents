import { Component, OnInit } from '@angular/core';
import { AdherentCard } from "../adherent-card/adherent-card";
import { Adherent } from '../models/adherent';
import { AdherentsService } from '../services/adherents-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adherent-list',
  imports: [AdherentCard],
  templateUrl: './adherent-list.html',
  styleUrl: './adherent-list.scss',
})
export class AdherentList implements OnInit {
  adherents!: Adherent[];
  adherentsFiltres: Adherent[] | undefined;
  selectedAdherent?: Adherent;

  constructor(private adherentsService: AdherentsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.adherents = this.adherentsService.getAll();
    this.adherentsFiltres = this.adherents;
  }
  
  gererVoirDetail($event: Adherent) {
    const id = $event.id;
    this.router.navigate(["adherents", id]);
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
