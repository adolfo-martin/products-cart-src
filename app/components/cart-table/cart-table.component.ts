import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../repositories/product';
import { CartStateI } from '../../store/cart/cart-state-i';
import { products } from '../../store/cart/cart-selectors'

@Component({
  selector: 'cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private _store: Store<CartStateI>) { }

  ngOnInit(): void {
    this.products$ = this._store.select(products)
  }

}
