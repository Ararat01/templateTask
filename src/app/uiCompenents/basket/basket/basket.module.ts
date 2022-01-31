import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from '../basket.component';
import { DiscountPipe } from 'src/app/shared/pipes/discount.pipe';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    BasketComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  exports: [
    BasketComponent,
    DiscountPipe
  ]
})
export class BasketModule { }
