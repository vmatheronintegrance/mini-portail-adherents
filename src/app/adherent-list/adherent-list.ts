import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AdherentCard } from "../adherent-card/adherent-card";
import { Adherent } from '../models/adherent';
import { AdherentsService } from '../services/adherents-service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, Subscription, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NotificationsService } from '../services/notifications-service';
import { Notification } from '../notification/notification';

@Component({
  selector: 'app-adherent-list',
  imports: [AdherentCard, AsyncPipe, Notification],
  templateUrl: './adherent-list.html',
  styleUrl: './adherent-list.scss',
})
export class AdherentList implements OnInit, OnDestroy {
  adherents$: Observable<Adherent[]> | undefined;
  
  adherents: Adherent[] = [];
  adherentsFiltres = signal<Adherent[]>([]);

  private searchSubject = new Subject<string>();


  subscription: Subscription | null = null;
  searchSubscription: Subscription | null = null;

  constructor(private adherentsService: AdherentsService,
              private notificationsService: NotificationsService,
              private router: Router) {}

  
  ngOnInit(): void {
    this.adherents$ = this.loadAdherentsObs();

    this.searchSubscription = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),  
      switchMap((value) => {
        return this.adherentsService.search(value).pipe(
          tap((data) => {
            this.adherentsFiltres.set(data);
          })
        );
      })
    ).subscribe();
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
    const adherent = this.adherentsFiltres().find((adh) => adh.id == $id);
    
    this.adherents$ = this.adherentsService.delete($id).pipe(
      tap(() => {
        this.notificationsService.afficher(`Adhérent Supprimé : ${adherent?.prenom} ${adherent?.nom}`);
      }),
      switchMap(() => {
        return this.loadAdherentsObs();
      }),
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
  }

  gererVoirDetail($event: Adherent) {
    const id = $event.id;
    this.router.navigate(["adherents", id]);
  }

  recherche($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  onAdherentSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const adherentId = Number(select.value);
  }
 
}
