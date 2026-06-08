import { Observable } from 'rxjs';
import { NotificationsService } from './../services/notifications-service';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [AsyncPipe],
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
})
export class Notification {
  // Version 1
  message$: Observable<string | null> | undefined;

  constructor(private notificationService: NotificationsService) {}
  
  ngOnInit() {
    this.message$ = this.notificationService.message$;
  }
  
  // Version 2
  // notificationsService = inject(NotificationsService);
  // message$ = this.notificationsService.message$;
  
  // Version 3
  // notificationsService = inject(NotificationsService);
}
