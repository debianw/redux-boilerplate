/**
 *
 */

import React from 'react';
import { Link } from 'react-router';
import styles from './toolbar.css';

/**
 *
 */

export default (props) => {
  const { title, back } = props;

  return (
    <div className={styles.root}>

      <div>
        { back && <Link to={back}> <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Back </Link> }
      </div>

      <h2> {title} </h2>
    </div>
  );
}
