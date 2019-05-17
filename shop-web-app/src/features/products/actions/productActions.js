import http from '../../../http';

export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';

export const getProductsList = () => ({
  type: GET_PRODUCTS_LIST,
  async payload() {
    const products = await http.get('/api/products');
    return products;
  }
});
