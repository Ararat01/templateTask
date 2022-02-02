import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iblog } from 'src/app/interfaces/iblog';
import { iproduct } from 'src/app/interfaces/iproduct';
import { blogsSelector, productsSelector } from 'src/app/reducers/createReducer/createdReducers';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  productsArr: iproduct[] = []
  blogsArr: iblog[] = []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(productsSelector).subscribe((v) => {
      this.productsArr = [...v as iproduct[]].sort((a,b) => b.stars - a.stars)
    })
    this.store.select(blogsSelector).subscribe((v) => {
      this.blogsArr = v as iblog[];
    })
  }
}
