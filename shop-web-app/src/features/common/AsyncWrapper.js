import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AsyncWrapper = ({ async, children }) => {
  return (
    <Fragment>
      {async.loading && <div>Loading...</div>}
      {async.error && (
        <div>
          {async.error.status}: {async.error.data}
        </div>
      )}
      {children}
    </Fragment>
  );
};

export const asyncProp = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.any,
  error: PropTypes.any
};

AsyncWrapper.propTypes = {
  async: PropTypes.shape(asyncProp).isRequired,
  children: PropTypes.node
};

AsyncWrapper.defaultProps = {
  children: null
};

export default AsyncWrapper;
