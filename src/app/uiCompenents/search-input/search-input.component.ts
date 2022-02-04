import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  categoriesOpened: boolean = false
  categoryName: string = 'All categories';

  searchForm = this.fb.group({
    category: ''
  })

  searchCategory() {
    this.router.navigateByUrl(`/category/${this.categoryName}/${this.searchForm.value["category"]}`)
  }
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

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
