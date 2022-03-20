import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  entityName: string = 'products'
  apiUrl: string = `${environment.apiUrlBasic}/${this.entityName}`
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product)
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`)
  }
}
