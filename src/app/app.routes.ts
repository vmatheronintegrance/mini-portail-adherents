import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { AdherentList } from './adherent-list/adherent-list';
import { Profil } from './profil/profil';
import { AdherentDetails } from './adherent-details/adherent-details';
import { Error404 } from './error404/error404';
import { AdherentForm } from './adherent-form/adherent-form';

export const routes: Routes = [
    {
        path: "",
        component: Accueil
    },
    {
        path: "adherents",
        component: AdherentList
    },
    {
        path: "adherents/nouveau",
        component: AdherentForm
    },
    {
        path: "adherents/:id",
        component: AdherentDetails
    },
    {
        path: "profil",
        component: Profil
    },
    {
        path: "**",
        component: Error404
    },

];
