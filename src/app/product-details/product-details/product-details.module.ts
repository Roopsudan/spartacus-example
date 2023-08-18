import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details.component';
import { ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      routing:{
        routes:{
          product:{
            paths:['product/:productCode']     
          }
        }
      }
    })
  ]
})
export class ProductDetailsModule { }
