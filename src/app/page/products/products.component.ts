import { Observable } from 'rxjs';
import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productservice: ProductsService
  ) { }

  products$: Observable<Product[]> = this.productservice.getAll()

  onDelete(products: Product): void {
    this.productservice.delete(products.id).subscribe(
      user => this.products$ = this.productservice.getAll(),
    )
  }

  ngOnInit(): void {
  }

}
