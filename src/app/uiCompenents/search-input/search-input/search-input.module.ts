import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    ReactiveFormsModule,
    // RouterModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule { }
