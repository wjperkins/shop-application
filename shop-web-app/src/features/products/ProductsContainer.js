import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductsList } from './actions/productActions';

const ProductsContainer = ({ actions, products }) => {
  return (
    <button type="button" onClick={() => actions.getProductsList()}>
      Click Me!
    </button>
  );
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
