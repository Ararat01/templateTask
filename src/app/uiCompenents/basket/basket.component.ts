import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { basketProduct } from 'src/app/interfaces/iproduct';
import { removeFromBasket, wishlistBasket } from 'src/app/reducers/basket';
import { basketSelector } from 'src/app/reducers/createReducer/createdReducers';
import { wishlist } from 'src/app/reducers/products';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketActive: boolean = false
  basketItems: basketProduct[] = []
  letopen: boolean = false

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(basketSelector).subscribe((v) => {
      this.basketItems = v as basketProduct[];
    })
  }

  remove(product: basketProduct) {
    this.letopen = true
    this.store.dispatch(removeFromBasket({id: product.id}))
  }

  wishlist(product: basketProduct) {
    this.letopen = true
    this.store.dispatch(wishlist({id: product.id}))
    this.store.dispatch(wishlistBasket({id: product.id}))
  }
 
  openBasket() {
    this.letopen = true
    this.basketActive = true
  }
  closeBasket() {
    this.basketActive = this.letopen
    this.letopen = false
  }

  get basketTotal() {
    let total: number = 0
    this.basketItems.forEach(element => {
      total += ((element.price / 100) * (100 - element.discount) * element.count)
    });
    return total.toFixed(2)
  }

  starsCount(count: number) {
    return [...Array(count)]
  }
}
