import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {
  ngOnInit(): void {
  }
  email: any = '';
  phoneNumber: any = '';

  constructor(public activeModal: NgbActiveModal) {}

  subscribeBySMS() {
    // Handle SMS subscription logic here
    this.activeModal.close();
  }

}
