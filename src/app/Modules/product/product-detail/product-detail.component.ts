import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { filter, Subscription } from 'rxjs';
import { iproduct } from 'src/app/interfaces/iproduct';
import { allBasket, wishlistBasket } from 'src/app/reducers/basket';
import { productsSelector } from 'src/app/reducers/createReducer/createdReducers';
import { wishlist } from 'src/app/reducers/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  productsArr: iproduct[] = []
  currentProduct!: iproduct | undefined
  id!: number
  subs!: Subscription
  wish?: boolean

  constructor(
    private store: Store,
    private ActiveRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProduct()
    this.currentProduct = this.productsArr.find(prod => prod.id == this.id)
    this.wish = this.currentProduct?.wishlist
    this.subs = this.route.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
      .subscribe(() => {
        this.ActiveRoute.params.subscribe(({ id }) => {
          this.id = id
        })
        this.currentProduct = this.productsArr.find(prod => prod.id == Number(this.id))
      })
  }

  getProduct(){
    this.ActiveRoute.params.subscribe(({ id }) => {
      this.id = id
    })
    this.store.select(productsSelector).subscribe((v) => {
      this.productsArr = [...v as iproduct[]].sort((a,b) => b.stars - a.stars);
    })
    
  }

  addToBasket(product?: iproduct) {
    if(product) {
      this.store.dispatch(allBasket({basket: product as iproduct}))
      this.toastr.success('Continue shopping', 'Product added to your basket!');
    }
  }

  get starsCount() {
    return typeof  this.currentProduct?.stars == "number" ? [...Array(this.currentProduct?.stars)] : []
  }

  get starsPassCount() {
    return typeof  this.currentProduct?.stars == "number" ? [...Array(5 - this.currentProduct?.stars)] : []
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
