import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallProductComponent } from '../small-product.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SmallProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    SmallProductComponent
  ]
})
export class SmallProductModule { }
