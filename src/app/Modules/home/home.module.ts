import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homeComponents/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SearchInputModule } from 'src/app/uiCompenents/search-input/search-input/search-input.module';
import { SmallProductModule } from 'src/app/uiCompenents/small-product/small-product/small-product.module';
import { BasketModule } from 'src/app/uiCompenents/basket/basket/basket.module';
import { HeaderModule } from 'src/app/shared/components/header/header/header.module';
import { CommentsSliderModule } from 'src/app/uiCompenents/comments-slider/comments-slider/comments-slider.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SearchInputModule,
    SmallProductModule,
    BasketModule,
    HeaderModule,
    CommentsSliderModule
  ]
})
export class HomeModule { }
