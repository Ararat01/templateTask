import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { basketInterface, basketReducer } from './basket';
import { blogsInterface, blogsReducer } from './blog';
import { commentsInterface, commentsReducer } from './comments';
import { productsInterface, productsReducer } from './products';

export interface State {
  products: productsInterface,
  basket: basketInterface,
  comments: commentsInterface,
  blogs: blogsInterface
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer,
  basket: basketReducer,
  comments: commentsReducer,
  blogs: blogsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
