import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

const Display = ({ displayKey }) => (
  <div className={styles.display}>
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
