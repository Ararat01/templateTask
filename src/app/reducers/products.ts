import { createAction, createReducer, on, props } from "@ngrx/store";
import { iproduct } from "../interfaces/iproduct";


export const allProducts = createAction('[USER] products get', props<{products: iproduct[]}>())
export const wishlist = createAction('[USER] product to wishlist', props<{ id: number }>())


export interface productsInterface {
    products: iproduct[],
}


export const initStateOfProducts: productsInterface = {
    products: []
}


export const productsReducer = createReducer(
    initStateOfProducts,
    on(allProducts, (state, {products}) => {
        return {    
            ...state,
            products: products
        }
    }),
    on(wishlist, (state, {id}) => {
        return { products: state.products.map(prod => {
            return prod.id !== id ? prod : {
                ...prod,
                wishlist: !prod.wishlist
            }
        }) }
    })
)