/**
 *
 */

import React from 'react';
import classnames from 'classnames';
import styles from './dashboard.css';

/**
 *
 */

export default (props) => {
  return (
    <div className={styles.countyList}>
      <div className={styles.header}>
        <div>
          <i className={classnames("material-icons", styles.icon)}>account_balance</i>
        </div>

        <div>
          <h4> County List </h4>
        </div>
      </div>

      <ul>
        <li> <a href="#"> Appling (3) </a> </li>
        <li> <a href="#"> Baker (1) </a> </li>
        <li> <a href="#"> Borrow (1) </a> </li>
      </ul>

    </div>
  );
}
