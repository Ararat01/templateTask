import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchInputModule } from 'src/app/uiCompenents/search-input/search-input/search-input.module';
import { DiscountPipe } from '../pipes/discount.pipe';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [
    DiscountPipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchInputModule
  ],
  exports: [
    DiscountPipe,
    FooterComponent
  ]
})
export class SharedModule { }
