import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductsList } from './actions/productActions';
import AsyncWrapper, { asyncProp } from '../common/AsyncWrapper';

const ProductsContainer = ({ actions, products }) => {
  return (
    <Fragment>
      <button type="button" onClick={() => actions.getProductsList()}>
        Load Products
      </button>
      <AsyncWrapper async={products}>
        {products.data &&
          products.data.map(product => (
            <div key={product.id}>
              <div>Name: {product.name}</div>
              <div>Description: {product.description}</div>
              <div>Price: {product.price}</div>
            </div>
          ))}
      </AsyncWrapper>
    </Fragment>
  );
};

ProductsContainer.propTypes = {
  actions: PropTypes.shape({
    getProductsList: PropTypes.func.isRequired
  }).isRequired,
  products: PropTypes.shape(asyncProp).isRequired
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
