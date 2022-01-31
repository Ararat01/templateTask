import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';
import { SearchInputModule } from 'src/app/uiCompenents/search-input/search-input/search-input.module';
import { BasketModule } from 'src/app/uiCompenents/basket/basket/basket.module';
import { DiscountPipe } from '../pipes/discount.pipe';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchInputModule,
    BasketModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
