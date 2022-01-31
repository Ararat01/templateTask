import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { productsInterface, productsReducer } from './products';

export interface State {
  products: productsInterface
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
