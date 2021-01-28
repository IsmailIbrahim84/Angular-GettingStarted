import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle = 'ProuductList';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  _listFilter = '' ;
  product: IProduct[];
  filterProducts: IProduct[];
  // private _productService;
  private errorMessage: any;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value){
    this._listFilter = value;
    this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.product;
  }
  constructor(private productService: ProductService) {
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('OnInit');
    this.productService.getProducts().subscribe({next: product =>
    {this.product = product; this.filterProducts = this.product; } , error: err => this.errorMessage = err});
    // this.product = this.productService.getProducts();
    // this.filterProducts = this.product;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.product.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }
}
