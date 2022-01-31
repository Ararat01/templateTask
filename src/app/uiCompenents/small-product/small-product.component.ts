import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { iproduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-small-product',
  templateUrl: './small-product.component.html',
  styleUrls: ['./small-product.component.scss']
})
export class SmallProductComponent implements OnInit {
  
  @Input()
  data!: iproduct

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
