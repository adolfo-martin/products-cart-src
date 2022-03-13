import { CartAction, CartActionsTypes } from "./cart-actions";
import { ProductItemI } from "./product-item-i";

const initialCartItems: ProductItemI[] = []

export function CartReducer(
    state: ProductItemI[] = initialCartItems,
    action: CartAction
): ProductItemI[] {
    switch (action.type) {
        case CartActionsTypes.CLEAR_CART:
            return [];

        case CartActionsTypes.ADD_PRODUCT:
            const productItem = action.payload;
            return [ ...state, productItem ];

        case CartActionsTypes.REMOVE_PRODUCT:
            const productUuid = action.payload;
            const stateClone = [ ...state ];
            const foundEntry = 
                stateClone.find(entry => entry.uuid === productUuid)
            if (foundEntry) {
                stateClone.splice(stateClone.indexOf(foundEntry), 1)
            }
            return stateClone

        default:
            return state;
    }
}

// const _clearCart = (_: any) => []

// const _addProduct = (items: Product[], product: Product) => {
//     const itemsClone: Product[] = JSON.parse(JSON.stringify(items))
//     console.log(product)
//     itemsClone.push(product)
//     return itemsClone
// }

// const _removeProduct = (items: Product[], product: Product) => {
//     const itemsClone: Product[] = JSON.parse(JSON.stringify(items))
//     const foundEntriy = itemsClone.find(entriy => entriy.uuid === product.uuid)
//     if (foundEntriy) {
//         itemsClone.splice(itemsClone.indexOf(foundEntriy), 1)
//     }
//     return itemsClone
// }

// export const cartReducer = createReducer(
//     initialCartItems,
//     on(clearCart, _clearCart),
//     on(addProduct, _addProduct),
//     on(removeProduct, _removeProduct),
// )