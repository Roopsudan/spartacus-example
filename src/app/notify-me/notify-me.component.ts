import { Component, OnInit } from '@angular/core';
import { NotifyMeService } from './notify-me.service';

@Component({
  selector: 'app-notify-me',
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.scss']
})
export class NotifyMeComponent implements OnInit {

  constructor(private notificationDialogService: NotifyMeService) { }
   subscribe() {
   this.notificationDialogService.openDialog();
   }

  ngOnInit(): void {
  }

}
