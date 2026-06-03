import { Injectable } from '@angular/core';
import { Adherent } from '../models/adherent';

const adherents: Adherent[] = [
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

@Injectable({
  providedIn: 'root',
})
export class AdherentsService {
  
  getAll(): Adherent[] {
    return adherents;
  }



}
