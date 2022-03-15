import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartStateI } from '../../store/cart/cart-state-i';
import { productsTotalPriceSelector, productsTotalQuantitySelector } 
  from '../../store/cart/cart-selectors';

@Component({
  selector: 'application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.css']
})
export class ApplicationHeaderComponent implements OnInit {

  productsTotalQuantity$!: Observable<number>;
  productsTotalPrice$!: Observable<number>;

  constructor(private _store: Store<CartStateI>) { }

  ngOnInit(): void {
    this.productsTotalQuantity$ = this._store.select(productsTotalQuantitySelector)
    this.productsTotalPrice$ = this._store.select(productsTotalPriceSelector)
  }

}
