import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input.component';
import { ClickOutsideModule } from 'ng-click-outside';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule { }
