import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { Product } from '../../repositories/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products$!: Observable<Product[]>;

  @Output('productsLoaded') private _productsLoadedEmitter = new EventEmitter();

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productsService.retrieveProducts$().pipe(
      finalize(() => this._emitProductsLoaded()),
    );
  }

  private _emitProductsLoaded() {
    this._productsLoadedEmitter.emit();
  }
}
