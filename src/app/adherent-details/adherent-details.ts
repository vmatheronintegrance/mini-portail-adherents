import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdherentsService } from '../services/adherents-service';
import { Adherent } from '../models/adherent';
import { StatutPipe } from '../pipes/statut-pipe';
import { AsyncPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { catchError, EMPTY, Observable, of } from 'rxjs';

@Component({
  selector: 'app-adherent-details',
  imports: [StatutPipe, TitleCasePipe, UpperCasePipe, AsyncPipe, DatePipe, RouterLink],
  templateUrl: './adherent-details.html',
  styleUrl: './adherent-details.scss',
})
export class AdherentDetails {

  adherent$: Observable<Adherent> | undefined;
  error = signal<boolean>(false);

  constructor(private activatedRoute: ActivatedRoute,
              private adherentsService: AdherentsService
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
}
