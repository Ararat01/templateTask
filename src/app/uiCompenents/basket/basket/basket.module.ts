import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from '../basket.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    SharedModule
  ],
  exports: [
    BasketComponent
  ]
})
export class BasketModule { }
