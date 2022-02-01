import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { icomment } from './interfaces/icomment';
import { iproduct } from './interfaces/iproduct';
import { allComments } from './reducers/comments';
import { allProducts } from './reducers/products';
import { CommentsService } from './services/comments.service';
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
    this.getAllComments.getComments().subscribe(v => {
      this.store.dispatch(allComments({comments: v as icomment[]}))
    })
  }

  constructor(
      private getAllProducts: ProductsService,
      private store: Store,
      private getAllComments: CommentsService
  ) {}
}
