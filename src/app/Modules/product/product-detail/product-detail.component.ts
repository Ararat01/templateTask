import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iproduct } from 'src/app/interfaces/iproduct';
import { productsSelector } from 'src/app/reducers/createReducer/createdReducers';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productsArr: iproduct[] = []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(productsSelector).subscribe((v) => {
      this.productsArr = [...v as iproduct[]].sort((a,b) => b.stars - a.stars);
    })
  }

}
