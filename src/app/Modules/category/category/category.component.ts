import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
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

  @ViewChildren('checkbox') chb!: QueryList<ElementRef<HTMLInputElement>>;

  category!: string
  categoryInput: string = ''
  productsArr: iproduct[] = []
  productsFilteredArr: iproduct[] = []
  subs!: Subscription
  standartForList = 9
  standartForGrid = 5
  productType = false
  standart = this.standartForList
  start: number = 0
  end: number = this.standart

  brands: Array<{name: string, value: string}> = [
    {name: 'Grocery Tarm Fields', value: 'Grocery Tarm Fields'},
    {name: 'Local Garden', value: 'Local Garden'},
    {name: 'Taste of Sunshine', value: 'Taste of Sunshine'},
    {name: 'Thramis Farm', value: 'Thramis Farm'}
  ]
  rating: Array<{img: string, value: number}> = [
    {img: 'assets/icons/5.png', value: 5},
    {img: 'assets/icons/4.png', value: 4},
    {img: 'assets/icons/3.png', value: 3},
    {img: 'assets/icons/2.png', value: 2},
    {img: 'assets/icons/1.png', value: 1}
  ]
  filtersForm = this.fb.group({
    brands: [[]],
    stars: [[]],
    min: 0,
    max: 100
  })
  initialValues = this.filtersForm.value


  

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store,
    private route: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }
  
  apply() {
    this.productsFilteredArr = this.productsArr.filter((product: iproduct) => {
      const discountedPrice = ((product.price / 100)*(100 - product.discount)).toFixed(2)
      const min = this.filtersForm.value['max'] >= this.filtersForm.value['min'] ? this.filtersForm.value['min'] : this.filtersForm.value['max']
      const max = this.filtersForm.value['max'] >= this.filtersForm.value['min'] ? this.filtersForm.value['max'] : this.filtersForm.value['min']
      if((this.filtersForm.value.stars.includes(product.stars) || !this.filtersForm.value.stars.length)
        && (this.filtersForm.value.brands.includes(product.farm) || !this.filtersForm.value.brands.length)
        && discountedPrice >= min 
        && discountedPrice <= max){
        return true
      }
      return false
    })
  }

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

  brandCheck(e: Event){
    const brand = (e.target as HTMLInputElement).value
    let brandsArr: string[] = this.filtersForm.value.brands as string[]
    if(brandsArr.includes(brand)) {
      brandsArr = brandsArr.filter((b: string) => b != brand)
      this.filtersForm.value.brands = brandsArr
    }
    else {
      this.filtersForm.value.brands.push(brand)
    }
  }

  starCheck(e: Event){
    const star = Number((e.target as HTMLInputElement).value)
    const checked = (e.target as HTMLInputElement).checked
    let starsArr: number[] = this.filtersForm.value.stars as number[]
    if(!checked) {
      starsArr = starsArr.filter((s: number) => s != star)
      this.filtersForm.value.stars = starsArr
    }
    else {
      this.filtersForm.value.stars.push(star)
    }
  }

  reset() {
    for(let i in this.chb["_results"]) {
      this.chb["_results"][i].nativeElement.checked = false
    }
    this.productsFilteredArr = this.productsArr
    this.filtersForm.reset(this.initialValues)
    this.filtersForm.value.brands = []
    this.filtersForm.value.stars = []
  }

  changeViewStyle(bool: boolean) {
    this.standart = bool ? this.standartForGrid : this.standartForList
    this.productType = bool
    this.start = 0
    this.end = this.standart
    this.end = this.standart
  }

  showMore() {
    if(this.end >= this.productsFilteredArr.length) {
      this.toastr.info('No more product', '', {
        timeOut: 1500
      })
    }
    else {
      this.end += 3
    }
  }

  goToPage(page: number) {
    window.scroll({ 
      top: 0, 
      behavior: 'smooth' 
    }); 
    this.start = this.standart * page
    this.end = (this.standart * page) + this.standart
  }

  currentPage(i: number) {
    return this.start == i * this.standart
  }

  pagesCount() {
    return [...Array(Math.ceil(this.productsFilteredArr.length / this.standart) + 1).keys()].slice(1)
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
      this.apply()
    })
  }
}
