/**
 *
 */

import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import styles from './dashboard.css';

/**
 *
 */

export default (props) => {
  return (
    <div className={styles.accountSpot}>
      <div>
        <i className={classnames("material-icons", styles.icon)}>account_circle</i>
      </div>

      <div>
        <h4> My Account </h4>
        Mike Watkins ( <Link to="/"> Logout </Link> )
      </div>
    </div>
  );
}
