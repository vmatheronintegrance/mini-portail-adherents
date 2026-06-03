import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdherentsService } from '../services/adherents-service';
import { Adherent } from '../models/adherent';
import { StatutPipe } from '../pipes/statut-pipe';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-adherent-details',
  imports: [StatutPipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './adherent-details.html',
  styleUrl: './adherent-details.scss',
})
export class AdherentDetails {

  adherent: Adherent | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private adherentsService: AdherentsService
  ) {}

  ngOnInit() {
    const adherentId = Number(this.activatedRoute.snapshot.params["id"]);
    this.adherent = this.adherentsService.getById(adherentId);
  }
}
