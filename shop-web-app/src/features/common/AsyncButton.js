import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { asyncShape } from '../../propTypes';

const useStyles = makeStyles({
  button: {
    margin: 10
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  }
});

const AsyncButton = ({ onClickFunction, async, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        color="primary"
        variant="outlined"
        className={classes.button}
        onClick={onClickFunction}
        disabled={async.loading}
      >
        {label}
      </Button>
      {async.loading && <CircularProgress data-testid="loading-spinner" size={25} />}
    </div>
  );
};

AsyncButton.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  async: asyncShape.isRequired,
  label: PropTypes.string.isRequired
};

export default AsyncButton;
