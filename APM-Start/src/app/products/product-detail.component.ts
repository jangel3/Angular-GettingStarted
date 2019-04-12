import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  products: IProduct[] = [];
  errorMessage: string;
  id: number;
  foundProduct: IProduct;
 
  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductService) { }

  _product: IProduct;
  get product(): IProduct{
    return this._product;
  }
  set product(value: IProduct){
    this._product=value;
    this.foundProduct = this.product ? this.findProduct() : this.product;
  }
  
  findProduct(): IProduct {
    return this.products.filter((item: IProduct) => item.productId == this.id)[0];
  }

  ngOnInit() : void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.pageTitle += `: ${id}`;
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        this.product = this.findProduct();
      },
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
