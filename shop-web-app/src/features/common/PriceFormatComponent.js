import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const PriceFormatComponent = ({ inputRef, onChange, ...other }) => (
  <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={values => {
      onChange({
        target: {
          value: values.value
        }
      });
    }}
    thousandSeparator
    decimalScale={2}
  />
);

PriceFormatComponent.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PriceFormatComponent;
