import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallProductComponent } from '../small-product.component';



@NgModule({
  declarations: [
    SmallProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallProductComponent
  ]
})
export class SmallProductModule { }
