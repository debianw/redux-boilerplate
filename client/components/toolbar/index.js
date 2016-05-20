/**
 *
 */

import React from 'react';
import styles from './toolbar.css';

/**
 *
 */

export default (props) => {
  const { title } = props;

  return (
    <div className={styles.root}>
      <h2> {title} </h2>
    </div>
  );
}
