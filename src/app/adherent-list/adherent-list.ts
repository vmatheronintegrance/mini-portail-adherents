import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AdherentCard } from "../adherent-card/adherent-card";
import { Adherent } from '../models/adherent';
import { AdherentsService } from '../services/adherents-service';
import { Router } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
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


  subscription: Subscription | null = null;

  constructor(private adherentsService: AdherentsService,
              private router: Router) {}

  
  ngOnInit(): void {
    this.adherents$ = this.loadAdherentsObs();
  }

  loadAdherentsObs(): Observable<Adherent[]> {
     return this.adherentsService.getAll().pipe(
      tap((data) => {
        this.adherents = data;
        this.adherentsFiltres.set(data);
      })
    );
  }

  supprimerAdherent($id: number): void {
    this.adherents$ = this.adherentsService.delete($id).pipe(
      switchMap(() => {
        return this.loadAdherentsObs();
      })
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
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
  }
 
}
