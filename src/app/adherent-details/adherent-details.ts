import { AsyncPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, EMPTY, Observable, Subscription } from 'rxjs';
import { AdherentForm } from "../adherent-form/adherent-form";
import { Adherent } from '../models/adherent';
import { StatutPipe } from '../pipes/statut-pipe';
import { AdherentsService } from '../services/adherents-service';

@Component({
  selector: 'app-adherent-details',
  imports: [StatutPipe, TitleCasePipe, UpperCasePipe, AsyncPipe, DatePipe, RouterLink, AdherentForm],
  templateUrl: './adherent-details.html',
  styleUrl: './adherent-details.scss',
})
export class AdherentDetails {

  adherent$: Observable<Adherent> | undefined;
  error = signal<boolean>(false);

  subscription: Subscription | null = null;
  editAdherent: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private adherentsService: AdherentsService,
              private router: Router
  ) {}

  ngOnInit() {
    const adherentId = Number(this.activatedRoute.snapshot.params["id"]);

    this.adherent$ = this.adherentsService.getById(adherentId).pipe(
      catchError(err => {
        this.error.set(true);
        return EMPTY;
      })
    );
  }

  supprimerAdherent($event: Adherent) {
    this.subscription = this.adherentsService.delete($event.id!).subscribe(response => {
      this.router.navigate(['/adherents']);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
