import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iproduct } from 'src/app/interfaces/iproduct';
import { productsSelector } from 'src/app/reducers/createReducer/createdReducers';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  productsArr!: iproduct[]

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(productsSelector).subscribe((v) => {
      this.productsArr = v as iproduct[];
    })
  }
}
