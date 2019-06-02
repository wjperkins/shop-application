import { combineReducers } from 'redux';
import asyncReducer from './utils/createAsyncReducer';
import asyncReducerWithDataPersist from './utils/createAsyncReducerWithDataPersist';
import { GET_PRODUCTS_LIST, CREATE_PRODUCT } from './features/products/actions/productActions';

const rootReducer = combineReducers({
  addedProduct: asyncReducer(CREATE_PRODUCT),
  products: asyncReducerWithDataPersist(GET_PRODUCTS_LIST)
});

export default rootReducer;
