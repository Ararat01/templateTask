import { createFeatureSelector, createSelector } from "@ngrx/store"
import { basketInterface } from "../basket"
import { blogsInterface } from "../blog"
import { commentsInterface } from "../comments"
import { productsInterface } from "../products"


const featureSelector1 = createFeatureSelector<productsInterface>('products')

export const productsSelector = createSelector(
    featureSelector1,
    state => state.products
)

const featureSelector2 = createFeatureSelector<basketInterface>('basket')

export const basketSelector = createSelector(
    featureSelector2,
    state => state.basket
)

const featureSelector3 = createFeatureSelector<commentsInterface>('comments')

export const commentsSelector = createSelector(
    featureSelector3,
    state => state.comments
)

const featureSelector4 = createFeatureSelector<blogsInterface>('blogs')

export const blogsSelector = createSelector(
    featureSelector4,
    state => state.blogs
)