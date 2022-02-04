import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { filter, Subscription } from 'rxjs';
import { iproduct } from 'src/app/interfaces/iproduct';
import { productsSelector } from 'src/app/reducers/createReducer/createdReducers';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category!: string
  categoryInput: string = ''
  productsArr: iproduct[] = []
  productsFilteredArr: iproduct[] = []
  subs!: Subscription
  start: number = 0
  end: number = 9


  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store,
    private route: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({category, categoryInput}) => {
      this.category = category
      this.categoryInput = categoryInput ? categoryInput : ''
    })
    this.getProduct()
    this.subs = this.route.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
      .subscribe(() => {
        this.activeRoute.params.subscribe(({category, categoryInput}) => {
          this.category = category
          this.categoryInput = categoryInput ? categoryInput : ''
        })
        this.getProduct()
      })
  }

  showMore() {
    if(this.end >= this.productsArr.length) {
      this.toastr.info('No more product', '', {
        timeOut: 1500
      })
    }
    this.end += 6

  }

  goToPage(page: number) {
    this.start = 9 * page
    this.end = (9 * page) + 9
    window.scroll({ 
      top: 0, 
      behavior: 'smooth' 
    }); 
  }

  currentPage(i: number) {
    return this.start == i * 9
  }

  pagesCount() {
    return [...Array(Math.ceil(this.productsFilteredArr.length / 9) + 1).keys()].slice(1)
  }


  getProduct(){
    this.store.select(productsSelector).subscribe((v) => {
      this.productsArr = v as iproduct[]
      if(this.categoryInput) {
        this.productsFilteredArr = [...v as iproduct[]].filter(prod => (prod.category == this.category || this.category == "All categories") && prod.title.toLowerCase().indexOf(this.categoryInput.toLowerCase()) != -1);
      }
      else {
        this.productsFilteredArr = [...v as iproduct[]].filter(prod => prod.category == this.category || this.category == "All categories");
      }
    })
    
  }
}
