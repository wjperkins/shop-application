import React, { useEffect, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  getProductsList,
  createProductAndRefreshList,
  deleteProductAndRefreshList
} from './actions/productActions';
import AsyncWrapper from '../common/AsyncWrapper';
import AsyncButton from '../common/AsyncButton';
import ProductsList from './ProductsList';
import { asyncShape } from '../../propTypes';

const ProductsContainer = ({ products, addedProduct }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  const createProductFunc = () => dispatch(createProductAndRefreshList());
  const deleteProductFunc = id => dispatch(deleteProductAndRefreshList(id));

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

ProductsContainer.propTypes = {
  products: asyncShape.isRequired,
  addedProduct: asyncShape.isRequired
};

const mapStateToProps = state => {
  return {
    addedProduct: state.addedProduct,
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductsContainer);
