import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { asyncShape } from '../../propTypes';
import AddProductDialog from './AddProductDialog';

const useStyles = makeStyles({
  button: {
    marginLeft: 10,
    marginTop: 10
  }
});

const AddProduct = ({ createProduct, addedProduct }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const classes = useStyles();

  return (
    <Fragment>
      <AddProductDialog
        createProduct={createProduct}
        addedProduct={addedProduct}
        isDialogOpen={isDialogOpen}
        handleDialogClose={() => setDialogOpen(false)}
      />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={() => setDialogOpen(true)}
      >
        Add
      </Button>
    </Fragment>
  );
};

AddProduct.propTypes = {
  createProduct: PropTypes.func.isRequired,
  addedProduct: asyncShape.isRequired
};

export default AddProduct;
