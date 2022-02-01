import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { basketInterface, basketReducer } from './basket';
import { commentsInterface, commentsReducer } from './comments';
import { productsInterface, productsReducer } from './products';

export interface State {
  products: productsInterface,
  basket: basketInterface,
  comments: commentsInterface
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer,
  basket: basketReducer,
  comments: commentsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
