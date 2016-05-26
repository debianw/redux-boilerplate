/**
 *
 */

import React from 'react';
import Toolbar from '../toolbar';
import styles from './modal.css';

/**
 *
 */

export default (props) => {
  const { title, controls, width } = props;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper} style={ {width: width || "90%"} }>

        <Toolbar title={title} />

        <div className={styles.inner}>
          {props.children}
        </div>

        {controls && (<div className={styles.controls}> {controls} </div>)}

      </div>
    </div>
  );
}
