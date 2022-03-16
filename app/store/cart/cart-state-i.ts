import { ProductItemI } from "./product-item-i"

export interface CartStateI {
    readonly products: ProductItemI[];
    readonly productsTotalQuantity: number;
    readonly productsTotalPrice: number;
}
