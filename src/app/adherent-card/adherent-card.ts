import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Adherent } from '../models/adherent';
import { DatePipe, JsonPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { StatutPipe } from '../pipes/statut-pipe';

@Component({
  selector: 'app-adherent-card',
  imports: [TitleCasePipe, UpperCasePipe, DatePipe, StatutPipe],
  templateUrl: './adherent-card.html',
  styleUrl: './adherent-card.scss',
})
export class AdherentCard implements OnDestroy, OnChanges {
  

  @Input() adherent: Adherent | undefined;
  @Output() voirDetails = new EventEmitter<Adherent>;
   
  estNouveau(dateAdhesion: string): boolean {
    return true;
  }

  ngOnDestroy(): void {
    console.log("destruction card : ", this.adherent?.id);
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changements détectés")
  }

}
