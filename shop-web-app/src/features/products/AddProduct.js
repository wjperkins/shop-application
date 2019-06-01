import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { asyncShape } from '../../propTypes';

const useStyles = makeStyles({
  button: {
    margin: 10
  }
});

const ProductsList = ({ addProduct, addedProduct }) => {
  const classes = useStyles();
  return (
    <Button
      color="primary"
      variant="outlined"
      className={classes.button}
      onClick={addProduct}
      disabled={addedProduct.loading}
    >
      Add
    </Button>
  );
};

ProductsList.propTypes = {
  addProduct: PropTypes.func.isRequired,
  addedProduct: asyncShape.isRequired
};

export default ProductsList;
