import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import AsyncButton from '../common/AsyncButton';
import PriceFormatComponent from '../common/PriceFormatComponent';
import { asyncShape } from '../../propTypes';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    margin: 5
  }
});

const AddProductDialog = ({ createProduct, addedProduct, isDialogOpen, handleDialogClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const classes = useStyles();

  return (
    <Dialog open={isDialogOpen} onClose={handleDialogClose} disableBackdropClick fullWidth>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent className={classes.content}>
        <TextField
          className={classes.field}
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          className={classes.field}
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className={classes.field}
          label="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">£</InputAdornment>,
            inputComponent: PriceFormatComponent
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <AsyncButton
          onClickFunction={() => createProduct(name, description, price)}
          async={addedProduct}
          label="Confirm"
        />
      </DialogActions>
    </Dialog>
  );
};

AddProductDialog.propTypes = {
  createProduct: PropTypes.func.isRequired,
  addedProduct: asyncShape.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired
};

export default AddProductDialog;
