import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderModule } from 'src/app/shared/components/header/header/header.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BasketModule } from 'src/app/uiCompenents/basket/basket/basket.module';
import { CommentsSliderModule } from 'src/app/uiCompenents/comments-slider/comments-slider/comments-slider.module';
import { SearchInputModule } from 'src/app/uiCompenents/search-input/search-input/search-input.module';
import { SmallProductModule } from 'src/app/uiCompenents/small-product/small-product/small-product.module';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule,
    SearchInputModule,
    SmallProductModule,
    BasketModule,
    HeaderModule,
    CommentsSliderModule
  ]
})
export class ProductDetailModule { }
