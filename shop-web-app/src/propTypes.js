import PropTypes from 'prop-types';

export const asyncShape = PropTypes.shape({
  loading: PropTypes.bool.isRequired,
  data: PropTypes.any,
  error: PropTypes.any
});

export const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
});
