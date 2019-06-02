import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { productShape } from '../../propTypes';
import Product from './Product';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const ProductsList = ({ products, deleteProduct }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products.map(product => (
        <Product key={product.id} product={product} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(productShape).isRequired,
  deleteProduct: PropTypes.func.isRequired
};

export default ProductsList;
