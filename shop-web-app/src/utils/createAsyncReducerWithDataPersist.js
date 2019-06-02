import typeToReducer from 'type-to-reducer';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const asyncReducerWithDataPersist = actionNameToPersistDataOn =>
  typeToReducer(
    {
      [actionNameToPersistDataOn]: {
        PENDING: state => ({ ...state, loading: true }),
        REJECTED: (_, action) => ({
          ...initialState,
          error: action.payload && action.payload.response
        }),
        FULFILLED: (_, action) => ({ ...initialState, data: action.payload })
      }
    },
    initialState
  );

export default asyncReducerWithDataPersist;
