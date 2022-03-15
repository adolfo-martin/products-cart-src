import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ProductItemI } from './product-item-i'


export const productsTotalQuantitySelector = createSelector(
    createFeatureSelector('cartItems'),
    (cart: ProductItemI[]) => cart.length
)

export const productsTotalPriceSelector = createSelector(
    createFeatureSelector('cartItems'),
    (cart: ProductItemI[]) => cart.reduce(
        (acc: number, cur: ProductItemI) => acc += cur.price,
        0
    )
)
