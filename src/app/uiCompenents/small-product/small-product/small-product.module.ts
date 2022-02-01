import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallProductComponent } from '../small-product.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    SmallProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SmallProductComponent
  ]
})
export class SmallProductModule { }
