import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AdherentCard } from "../adherent-card/adherent-card";
import { Adherent } from '../models/adherent';
import { AdherentsService } from '../services/adherents-service';
import { Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-adherent-list',
  imports: [AdherentCard, AsyncPipe],
  templateUrl: './adherent-list.html',
  styleUrl: './adherent-list.scss',
})
export class AdherentList implements OnInit, OnDestroy {
  adherents$: Observable<Adherent[]> | undefined;
  
  adherents: Adherent[] = [];
  adherentsFiltres = signal<Adherent[]>([]);
  // selectedAdherent?: Adherent;

  // subscription: Subscription | undefined;

  constructor(private adherentsService: AdherentsService,
              private router: Router) {}

  
  ngOnInit(): void {
    this.adherents$ = this.adherentsService.getAll().pipe(
      tap((data) => {
        this.adherents = data;
        this.adherentsFiltres.set(data);
      })
    );

    // this.adherents$ = this.adherentsService.getAll().pipe(
    //   tap((data) => {
    //     this.adherents = data;
    //     this.adherentsFiltres.set(data);
    //   })
    // );

    // this.subscription = this.adherentsService.getAll().subscribe(resultat => {
    //   this.adherents = resultat;
    //   this.adherentsFiltres.set(resultat);
    // });
  }

  ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
  }

  gererVoirDetail($event: Adherent) {
    const id = $event.id;
    this.router.navigate(["adherents", id]);
  }

  recherche($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    
    this.adherentsFiltres.set(this.adherents.filter(el => el.nom.startsWith(value)));
  }

  onAdherentSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const adherentId = Number(select.value);

    // if (!select.value) {
    //   this.selectedAdherent = undefined;
    //   return;
    // }

    // this.selectedAdherent = this.adherents.find(
    //   adherent => adherent.id === adherentId
    // );
  }
 
}
