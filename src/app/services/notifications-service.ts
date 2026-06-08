import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private messageSubject = new BehaviorSubject<string | null>(null);
  message$ = this.messageSubject.asObservable();

  afficher(message: string): void {
    console.log(message);
    this.messageSubject.next(message);
    setTimeout(() => this.messageSubject.next(null), 3000);
  }
}
