/**
 *
 */

import React from 'react';
import classnames from 'classnames';
import styles from './dashboard.css';
import { Link } from 'react-router';

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
        <li> <Link to="/dashboard"> Appling (3) </Link> </li>
        <li> <Link to="/dashboard"> Baker (1) </Link> </li>
        <li> <Link to="/dashboard"> Borrow (1) </Link> </li>
      </ul>

    </div>
  );
}
