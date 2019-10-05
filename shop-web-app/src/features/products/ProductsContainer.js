import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsList,
  createProductAndRefreshList,
  deleteProductAndRefreshList
} from './actions/productActions';
import AsyncWrapper from '../common/AsyncWrapper';
import ProductsList from './ProductsList';
import AddProduct from './AddProduct';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const addedProduct = useSelector(state => state.addedProduct);

  const createProduct = useCallback(
    (name, description, price) => dispatch(createProductAndRefreshList(name, description, price)),
    [dispatch]
  );
  const deleteProduct = useCallback(id => dispatch(deleteProductAndRefreshList(id)), [dispatch]);
  const getProducts = useCallback(() => dispatch(getProductsList()), [dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <AsyncWrapper async={products}>
        {products.data && <ProductsList products={products.data} deleteProduct={deleteProduct} />}
      </AsyncWrapper>
      <AddProduct createProduct={createProduct} addedProduct={addedProduct} />
    </>
  );
};

export default ProductsContainer;
