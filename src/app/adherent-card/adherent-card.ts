import { Component, EventEmitter, input, Input, OnChanges, OnDestroy, output, Output, SimpleChanges } from '@angular/core';
import { Adherent } from '../models/adherent';
import { DatePipe, JsonPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { StatutPipe } from '../pipes/statut-pipe';
import { AdherentsService } from '../services/adherents-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adherent-card',
  imports: [TitleCasePipe, UpperCasePipe, DatePipe, StatutPipe],
  templateUrl: './adherent-card.html',
  styleUrl: './adherent-card.scss',
})
export class AdherentCard {

  adherent = input<Adherent | undefined>();
  voirDetails = output<Adherent>();
  suppressionAdherent = output<number>();

  constructor(private adherentService: AdherentsService) {}

}
