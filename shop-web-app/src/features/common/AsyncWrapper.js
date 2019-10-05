import React from 'react';
import PropTypes from 'prop-types';
import { asyncShape } from '../../propTypes';

const AsyncWrapper = ({ async, children }) => {
  return (
    <>
      {async.loading && <div>Loading...</div>}
      {async.error && (
        <div>
          {async.error.status}: {async.error.data}
        </div>
      )}
      {children}
    </>
  );
};

AsyncWrapper.propTypes = {
  async: asyncShape.isRequired,
  children: PropTypes.node
};

AsyncWrapper.defaultProps = {
  children: null
};

export default AsyncWrapper;
