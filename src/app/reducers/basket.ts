import { createAction, createReducer, on, props } from "@ngrx/store";
import { basketProduct, iproduct } from "../interfaces/iproduct";


export const allBasket = createAction('[USER] basket get', props<{ basket: iproduct }>())
export const removeFromBasket = createAction('[USER] basket remove', props<{ id: number }>())
export const wishlistBasket = createAction('[USER] basket to wishlist', props<{ id: number }>())


export interface basketInterface {
    basket: basketProduct[],
}


export const initStateOfBasket: basketInterface = {
    basket: []
}


export const basketReducer = createReducer(
    initStateOfBasket,
    on(allBasket, (state, product) => {
        for(let productInBasket of state.basket) {
            if(productInBasket.id == product.basket.id) {
                const newBasket = state.basket.map((el) => {
                    return el.id == productInBasket.id ? {
                        ...el,
                        count: productInBasket.count + 1
                    } : el
                })
                return {basket: [...newBasket]}
            }
        }
        return {basket: [...state.basket, { ...product.basket, count: 1 }]}
    }),
    on(removeFromBasket, (state, {id}) => {
        return { basket: state.basket.filter(prod => prod.id !== id) }
    }),
    on(wishlistBasket, (state, {id}) => {
        return { basket: state.basket.map(prod => {
            return prod.id !== id ? prod : {
                ...prod,
                wishlist: !prod.wishlist
            }
        })}
    })
)