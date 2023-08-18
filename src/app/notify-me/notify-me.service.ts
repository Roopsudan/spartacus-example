import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyMeService {

  constructor(private modalService: NgbModal) { }
  openDialog() {
    const modalRef = this.modalService.open(NotificationDialogComponent);
    return modalRef;
  }
}
