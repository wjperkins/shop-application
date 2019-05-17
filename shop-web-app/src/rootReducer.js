import { combineReducers } from 'redux';
import productReducer from './features/products/reducers/productReducer';

const rootReducer = combineReducers({
  products: productReducer
});

export default rootReducer;
