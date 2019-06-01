import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductsList, createProductAndRefreshList } from './actions/productActions';
import AsyncWrapper from '../common/AsyncWrapper';
import ProductsList from './ProductsList';
import AddProduct from './AddProduct';
import { asyncShape } from '../../propTypes';

const ProductsContainer = ({ actions, products, addedProduct }) => {
  useEffect(() => {
    function fetchData() {
      actions.getProductsList();
    }
    fetchData();
  }, [actions]);

  return (
    <Fragment>
      <AsyncWrapper async={products}>
        {products.data && <ProductsList products={products.data} />}
      </AsyncWrapper>
      <AddProduct addProduct={actions.createProductAndRefreshList} addedProduct={addedProduct} />
    </Fragment>
  );
};

ProductsContainer.propTypes = {
  actions: PropTypes.shape({
    getProductsList: PropTypes.func.isRequired,
    createProductAndRefreshList: PropTypes.func.isRequired
  }).isRequired,
  products: asyncShape.isRequired,
  addedProduct: asyncShape.isRequired
};

const mapStateToProps = state => {
  return {
    addedProduct: state.addedProduct,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getProductsList, createProductAndRefreshList }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
