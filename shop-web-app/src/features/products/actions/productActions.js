import http from '../../../http/http';

export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const getProductsList = () => ({
  type: GET_PRODUCTS_LIST,
  async payload() {
    const products = await http.get('/api/products');
    return products;
  }
});

export const createProduct = (name, description, price) => {
  const product = {
    name,
    description,
    price
  };

  return {
    type: CREATE_PRODUCT,
    async payload() {
      const createdProduct = await http.post('/api/products', product);
      return createdProduct;
    }
  };
};

export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  async payload() {
    const deleted = await http.deleteItem(`/api/products/${id}`);
    return deleted;
  }
});

export const createProductAndRefreshList = (name, description, price) => {
  return async dispatch => {
    await dispatch(createProduct(name, description, price));
    await dispatch(getProductsList());
  };
};

export const deleteProductAndRefreshList = id => {
  return async dispatch => {
    await dispatch(deleteProduct(id));
    await dispatch(getProductsList());
  };
};
