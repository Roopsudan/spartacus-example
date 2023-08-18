import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyMeComponent } from '../notify-me.component';
import { ConfigModule } from '@spartacus/core';
import { StockNotificationComponent } from '@spartacus/storefront';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';



@NgModule({
  declarations: [NotifyMeComponent, NotificationDialogComponent ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        StockNotificationComponent: {
          component: NotifyMeComponent
        },
      }
    })
  ]
})
export class NotificationModule { }
