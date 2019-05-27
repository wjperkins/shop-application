import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { productShape } from '../../propTypes';

const useStyles = makeStyles({
  card: {
    width: 275,
    margin: 10
  },
  content: {
    paddingBottom: 0
  },
  actions: {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
});

function Product({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="h5">£{product.price}</Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}

Product.propTypes = {
  product: productShape.isRequired
};

export default Product;
