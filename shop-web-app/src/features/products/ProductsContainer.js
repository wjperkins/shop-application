import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductsList } from './actions/productActions';
import AsyncWrapper from '../common/AsyncWrapper';
import ProductsList from './ProductsList';
import { asyncShape } from '../../propTypes';

const ProductsContainer = ({ actions, products }) => {
  useEffect(() => {
    function fetchData() {
      actions.getProductsList();
    }
    fetchData();
  }, [actions]);

  return (
    <AsyncWrapper async={products}>
      {products.data && <ProductsList products={products.data} />}
    </AsyncWrapper>
  );
};

ProductsContainer.propTypes = {
  actions: PropTypes.shape({
    getProductsList: PropTypes.func.isRequired
  }).isRequired,
  products: asyncShape.isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ getProductsList }, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
