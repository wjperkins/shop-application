import React, { useEffect, Fragment } from 'react';
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
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  const createProductFunc = () => dispatch(createProductAndRefreshList());
  const deleteProductFunc = id => dispatch(deleteProductAndRefreshList(id));

  const products = useSelector(state => state.products);
  const addedProduct = useSelector(state => state.addedProduct);

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
