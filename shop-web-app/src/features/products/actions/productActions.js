import http from '../../../http';

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

export const createProduct = () => {
  const product = {
    name: 'new product name',
    description: 'new product description',
    price: 12.49
  };

  return {
    type: CREATE_PRODUCT,
    async payload() {
      const createdProduct = http.post('/api/products', product);
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

export const createProductAndRefreshList = () => {
  return async dispatch => {
    try {
      await dispatch(createProduct());
      await dispatch(getProductsList());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProductAndRefreshList = id => {
  return async dispatch => {
    try {
      await dispatch(deleteProduct(id));
      await dispatch(getProductsList());
    } catch (error) {
      console.log(error);
    }
  };
};
