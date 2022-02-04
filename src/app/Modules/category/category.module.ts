import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category/category.component';
import { HeaderModule } from 'src/app/shared/components/header/header/header.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BasketModule } from 'src/app/uiCompenents/basket/basket/basket.module';
import { SearchInputModule } from 'src/app/uiCompenents/search-input/search-input/search-input.module';
import { SmallProductModule } from 'src/app/uiCompenents/small-product/small-product/small-product.module';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    SearchInputModule,
    SmallProductModule,
    BasketModule,
    HeaderModule
  ]
})
export class CategoryModule { }
