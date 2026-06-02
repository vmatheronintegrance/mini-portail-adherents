export interface Adherent {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    dateAdhesion: string;
    statut: 'actif' | 'inactif' | 'en_attente';
    type: 'particulier' | 'professionnel';
    telephone?: string;
    ville?: string;
    notes?: string;
}
