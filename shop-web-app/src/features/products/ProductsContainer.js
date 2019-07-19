import React, { useEffect, Fragment, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsList,
  createProductAndRefreshList,
  deleteProductAndRefreshList
} from './actions/productActions';
import AsyncWrapper from '../common/AsyncWrapper';
import AsyncButton from '../common/AsyncButton';
import ProductsList from './ProductsList';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const addedProduct = useSelector(state => state.addedProduct);

  const createProductFunc = useCallback(() => dispatch(createProductAndRefreshList()), [dispatch]);
  const deleteProductFunc = useCallback(id => dispatch(deleteProductAndRefreshList(id)), [dispatch]);
  const getProductsFunc = useCallback(() => dispatch(getProductsList()), [dispatch]);

  useEffect(() => {
    getProductsFunc();
  }, [getProductsFunc]);

  return (
    <Fragment>
      <AsyncWrapper async={products}>
        {products.data && (
          <ProductsList products={products.data} deleteProduct={deleteProductFunc} />
        )}
      </AsyncWrapper>
      <AsyncButton onClickFunction={createProductFunc} async={addedProduct} label="Add" />
    </Fragment>
  );
};

export default ProductsContainer;
