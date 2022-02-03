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
  
  @Input() data!: iproduct
  @Input() stars: boolean = false
  

  constructor(
    private store: Store,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  starsCount(count: number) {
    return [...Array(count)]
  }

}
