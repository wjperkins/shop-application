import typeToReducer from 'type-to-reducer';
import { GET_PRODUCTS_LIST } from '../actions/productActions';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const productReducer = typeToReducer(
  {
    [GET_PRODUCTS_LIST]: {
      PENDING: () => ({ ...initialState, loading: true }),
      REJECTED: (_, action) => ({
        ...initialState,
        error: action.payload && action.payload.response
      }),
      FULFILLED: (_, action) => ({ ...initialState, data: action.payload })
    }
  },
  initialState
);

export default productReducer;
