import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsSliderComponent } from '../comments-slider.component';



@NgModule({
  declarations: [
    CommentsSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommentsSliderComponent
  ]
})
export class CommentsSliderModule { }
