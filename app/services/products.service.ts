import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockArrayProductsRepository } from '../repositories/mock-array-products-repository';
import { Product, ProductUuid } from '../repositories/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _productsRepository: MockArrayProductsRepository) { }

  public retrieveProducts$(): Observable<Product[]> {
    return this._productsRepository.retrieveProducts$()
  }

  public retrieveProductsByUuid$(uuid: ProductUuid): Observable<Product | undefined> {
    return this._productsRepository.retrieveProductByUuid$(uuid)
  }
}
