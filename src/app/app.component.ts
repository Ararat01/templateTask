import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iblog } from './interfaces/iblog';
import { icomment } from './interfaces/icomment';
import { iproduct } from './interfaces/iproduct';
import { allBlogs } from './reducers/blog';
import { allComments } from './reducers/comments';
import { allProducts } from './reducers/products';
import { BlogsService } from './services/blogs.service';
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
    this.getAllBlogs.getBlogs().subscribe(v => {
      const blogsArr = [...(v as iblog[])].sort((b,a) => Date.parse(a.date)- Date.parse(b.date))
      this.store.dispatch(allBlogs({ blogs: blogsArr}));
    })
  }

  constructor(
      private getAllProducts: ProductsService,
      private store: Store,
      private getAllComments: CommentsService,
      private getAllBlogs: BlogsService
  ) {}
}
