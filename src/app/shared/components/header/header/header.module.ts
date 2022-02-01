import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BasketModule } from 'src/app/uiCompenents/basket/basket/basket.module';
import { SearchInputModule } from 'src/app/uiCompenents/search-input/search-input/search-input.module';
import { BasketComponent } from 'src/app/uiCompenents/basket/basket.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BasketModule,
    SearchInputModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
