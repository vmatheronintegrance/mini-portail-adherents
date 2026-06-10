import { Component, inject, Input, input, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdherentsService } from '../services/adherents-service';
import { catchError, Subscription, tap } from 'rxjs';
import { Adherent } from '../models/adherent';
import { Router } from '@angular/router';
import { NotificationsService } from '../services/notifications-service';

@Component({
  selector: 'app-adherent-form',
  imports: [ReactiveFormsModule],
  templateUrl: './adherent-form.html',
  styleUrl: './adherent-form.scss',
})
export class AdherentForm implements OnDestroy, OnInit {
  // Injections
  adherentsService = inject(AdherentsService);
  formBuilder = inject(FormBuilder);
  notificationService = inject(NotificationsService);
  router = inject(Router);
  
  // Inputs
  adherent = input<Adherent | undefined>(undefined);


  // Varibales et formulaire
  subscription: Subscription | undefined;
  isEdition: boolean = false;

  formulaire = this.formBuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    dateAdhesion: ['', [Validators.required]],
    statut: ['', [Validators.required]],
    type: ['', [Validators.required]],
    telephone: [''],
    ville: [''],
    notes: ['']
  });

  ngOnInit(): void {
    if(this.adherent()) {
      this.formulaire.patchValue(this.adherent() as Adherent);
      this.isEdition = true;
    }
  }

  
  submit($event: Event) {
    $event.preventDefault();

    console.log(this.formulaire.valid);

    if(this.formulaire.valid) {
      // let plutôt que const car la varible sera peut-être modifiée 
      let adherent: Adherent = this.formulaire.value as Adherent;

      if(this.isEdition) {
        // Mise à jour de la variable locale adherent en utilisant l'id passé via l'adhérent en input du composant
        adherent = {
          ...adherent, 
          id: this.adherent()?.id
        };

        this.subscription = this.adherentsService.update(adherent).pipe(
          tap(() => {
            this.router.navigate(['/adherents']);
            this.notificationService.afficher(`Adhérent mis à jour avec succès : ${adherent.prenom} ${adherent.nom}`)
          })
        ).subscribe();

      } else {
        this.subscription = this.adherentsService.create(adherent).pipe(
          tap(() => {
            this.router.navigate(['/adherents']);
            this.notificationService.afficher(`Adhérent créé avec succès : ${adherent.prenom} ${adherent.nom}`)
          })
        ).subscribe();
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  inputInvalid(formControlName: string): boolean | undefined{
    return this.formulaire.get(formControlName)?.invalid && (this.formulaire.get(formControlName)?.dirty || this.formulaire.get(formControlName)?.touched);
  }
}
