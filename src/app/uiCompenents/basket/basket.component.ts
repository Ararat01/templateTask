import { Component, OnInit } from '@angular/core';
import { iproduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketActive: boolean = false
  basketItems: iproduct[] = []
  letopen: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.getBasket()
  }

  openBasket() {
    this.letopen = true
    this.basketActive = true
  }
  closeBasket() {
    this.basketActive = this.letopen ? true :  false
    this.letopen = false
  }

  getBasket() {
    fetch('assets/basket.json').then(v => v.json()).then(v => {
      this.basketItems = (v.basket as iproduct[])
    }).catch(err=> console.log(err.message))
  }
  

  get basketTotal() {
    let total: number = 0
    this.basketItems.forEach(element => {
      total += (element.price / 100)*(100 - element.discount)
    });
    return total.toFixed(2)
  }

  starsCount(index: number) {
    return [...Array(this.basketItems[index]?.stars)]
  }
  starsPassiveCount(index: number) {
    return [...Array(5 - this.basketItems[index]?.stars)]
  }
}
