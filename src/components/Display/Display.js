import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

// Displays the sound associated with the pressed key above the drum kit.
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
