import { createFeatureSelector, createSelector } from "@ngrx/store"
import { productsInterface } from "../products"


const featureSelector1 = createFeatureSelector<productsInterface>('products')

export const productsSelector = createSelector(
    featureSelector1,
    state => state.products
)
