import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Adherent } from '../models/adherent';
import { AdherentCard } from "../adherent-card/adherent-card";

export const adherents: Adherent[] = [
  {
    id: 1,
    nom: "Durand",
    prenom: "Alice",
    email: "alice.durand@example.com",
    dateAdhesion: "2024-03-12",
    statut: "actif",
    type: "particulier",
    telephone: "0612345678",
    ville: "Paris",
    notes: "Membre depuis la refonte 2024"
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Julien",
    email: "julien.martin@pro-exemple.com",
    dateAdhesion: "2023-11-05",
    statut: "actif",
    type: "professionnel",
    telephone: "0622334455",
    ville: "Lyon"
  },
  {
    id: 3,
    nom: "Bernard",
    prenom: "Sophie",
    email: "sophie.bernard@example.com",
    dateAdhesion: "2025-01-20",
    statut: "en_attente",
    type: "particulier",
    ville: "Marseille",
    notes: "Validation administrative en cours"
  },
  {
    id: 4,
    nom: "PETIT",
    prenom: "Marc",
    email: "marc.petit@consulting-pro.fr",
    dateAdhesion: "2022-08-17",
    statut: "inactif",
    type: "professionnel",
    telephone: "0744556677"
  },
  {
    id: 5,
    nom: "robert",
    prenom: "emma",
    email: "emma.robert@example.com",
    dateAdhesion: "2024-06-02",
    statut: "actif",
    type: "particulier",
    ville: "Bordeaux",
    notes: "Participation régulière aux événements"
  }
];

@Component({
  selector: 'app-adherent-list',
  imports: [AdherentCard],
  templateUrl: './adherent-list.html',
  styleUrl: './adherent-list.scss',
})
export class AdherentList implements OnInit {
  readonly adherents = adherents;
  adherentsFiltres = adherents;
  selectedAdherent?: Adherent;

  
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
  
  ngOnInit(): void {
    console.log("Initialisation")
  }
 
}
