import { Action } from '@ngrx/store';
import { ProductItemI, ProductUuid } from './product-item-i';

export enum CartActionsTypes {
    CLEAR_CART = '[CART] Clear cart',
    ADD_PRODUCT = '[CART] Add product',
    REMOVE_PRODUCT = '[CART] Remove product'
}

export class ClearCartAction implements Action {
    readonly type = CartActionsTypes.CLEAR_CART;
    constructor() { }
}

export class AddProductAction implements Action {
    readonly type = CartActionsTypes.ADD_PRODUCT;
    constructor(public readonly payload: ProductItemI) { }
}

export class RemoveProductAction implements Action {
    readonly type = CartActionsTypes.REMOVE_PRODUCT;
    constructor(public readonly payload: ProductUuid) {}
}

export type CartAction = 
    | ClearCartAction
    | AddProductAction
    | RemoveProductAction
