import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { basketProduct, iproduct } from 'src/app/interfaces/iproduct';
import { ToastrService } from 'ngx-toastr';
import { wishlistBasket } from 'src/app/reducers/basket';
import { wishlist } from 'src/app/reducers/products';

@Component({
  selector: 'app-small-product',
  templateUrl: './small-product.component.html',
  styleUrls: ['./small-product.component.scss']
})
export class SmallProductComponent implements OnInit {
  
  @Input() data!: iproduct
  @Input() stars: boolean = false
  @Input() listType: boolean = false
  

  constructor(
    private store: Store,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  wishlist(product: iproduct) {
    this.store.dispatch(wishlist({id: product.id}))
    this.store.dispatch(wishlistBasket({id: product.id}))
  }

  starsCount(count: number) {
    return [...Array(count)]
  }

}
