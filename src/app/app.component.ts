import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iproduct } from './interfaces/iproduct';
import { allProducts } from './reducers/products';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'templatTask';

  ngOnInit(): void {
    this.getAllProducts.getProducts().subscribe(v => {
      this.store.dispatch(allProducts({products: v as iproduct[]}))
    })
  }

  constructor(
      private getAllProducts: ProductsService,
      private store: Store
  ) {}
}
