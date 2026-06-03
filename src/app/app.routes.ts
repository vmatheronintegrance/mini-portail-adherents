import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { AdherentList } from './adherent-list/adherent-list';
import { Profil } from './profil/profil';
import { AdherentDetails } from './adherent-details/adherent-details';

export const routes: Routes = [
    {
        path: '',
        component: Accueil,
    },
    {
        path: 'adherents',
        component: AdherentList
    },
    {
        path: 'adherents/:id',
        component: AdherentDetails
    },
    {
        path: "profil",
        component: Profil
    }
];
