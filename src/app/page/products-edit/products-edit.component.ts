import { Observable, switchMap } from 'rxjs';
import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  constructor(
    private ar: ActivatedRoute,
    private pr: ProductsService,
    private router: Router
  ) { }
  product$: Observable<Product> = this.ar.params.pipe(switchMap(params => this.pr.get(params['id'])))

  onUpdate(product: Product): void {
    this.pr.update(product).subscribe(
      product => this.router.navigate(['/', 'products'])
    )
  }

  ngOnInit(): void {
  }

}
