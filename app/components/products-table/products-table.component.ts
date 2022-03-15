import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, Observable } from 'rxjs';
import { Product } from '../../repositories/product';
import { ProductsService } from '../../services/products.service';
import { AddProductAction } from '../../store/cart/cart-actions';
import { CartStateI } from '../../store/cart/cart-state-i';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products$!: Observable<Product[]>;

  @Output('productsLoaded') private _productsLoadedEmitter = new EventEmitter();

  constructor(
    private _productsService: ProductsService,
    private _store: Store<CartStateI>,
  ) { }

  ngOnInit(): void {
    this.products$ = this._productsService.retrieveProducts$().pipe(
      finalize(() => this._emitProductsLoaded()),
    );
  }

  private _emitProductsLoaded() {
    this._productsLoadedEmitter.emit();
  }

  addProductToCart(productUuid: string) {
    this._productsService.retrieveProductsByUuid$(productUuid).subscribe(
      product => {
        if (product) {
          this._store.dispatch(new AddProductAction(product))
        }
      }
    )
  }
}
