import { createAction, createReducer, on, props } from "@ngrx/store";
import { iproduct } from "../interfaces/iproduct";


export const allProducts = createAction('[USER] products get', props<{products: iproduct[]}>())


export interface productsInterface {
    products: iproduct[],
}


export const initStateOfUsers: productsInterface = {
    products: []
}


export const productsReducer = createReducer(
    initStateOfUsers,
    on(allProducts, (state, {products}) => {
        return {    
            ...state,
            products: products
        }
    })
)