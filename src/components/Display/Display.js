import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ displayKey }) => (
  <div id="display">
    {displayKey}
  </div>
);


Display.propTypes = {
  displayKey: PropTypes.string,
};

Display.defaultProps = {
  displayKey: '',
};

export default Display;
