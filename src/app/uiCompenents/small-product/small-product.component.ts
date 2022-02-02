import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iproduct } from 'src/app/interfaces/iproduct';
import { allBasket } from 'src/app/reducers/basket';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-small-product',
  templateUrl: './small-product.component.html',
  styleUrls: ['./small-product.component.scss']
})
export class SmallProductComponent implements OnInit {
  
  @Input()
  data!: iproduct

  constructor(
    private store: Store,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addToBasket(product: iproduct) {
    // this.store.dispatch(allBasket({basket: product as iproduct}))
    // this.toastr.success('Continue shopping', 'Product added to your basket!');
  }

}
