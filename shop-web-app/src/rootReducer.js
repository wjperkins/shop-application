import { combineReducers } from 'redux';
import asyncReducer from './utils/createAsyncReducer';
import { GET_PRODUCTS_LIST, CREATE_PRODUCT } from './features/products/actions/productActions';

const rootReducer = combineReducers({
  addedProduct: asyncReducer(CREATE_PRODUCT),
  products: asyncReducer(GET_PRODUCTS_LIST)
});

export default rootReducer;
