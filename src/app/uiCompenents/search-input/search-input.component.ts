import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  categoriesOpened: boolean = false
  categoryName: string = 'All categories';

  open_categories() {
    this.categoriesOpened = true
  }

  close_categories() {
    this.categoriesOpened = false
  }

  changeCategoryName(category: string) {
    this.categoryName = category
    this.categoriesOpened =false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
