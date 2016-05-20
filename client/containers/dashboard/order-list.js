/**
 *
 */

import React from 'react';
import classnames from 'classnames';
import styles from './order-list.css';

/**
 *
 */

export default (props) => {
  return (
    <div className={styles.root}>
      <h3> Appling County: </h3>

      <div className={styles.wrapper}>

        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <div> Lot 25, Hawks Landing Phase 1</div>
            <div> Date: 5/2/2016</div>
          </div>

          <div>
            <span>File #: 1072-XXXX</span> <br />
            <span className={styles.status}>This Order is in Review</span>
          </div>

          <div className={styles.controls}>
            <button className="btn btn-success" type="submit">CHECKIN</button>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <div> Lot 25, Hawks Landing Phase 1</div>
            <div> Date: 5/2/2016</div>
          </div>

          <div>
            <span>File #: 1072-XXXX</span>
          </div>

          <div className={styles.controls}>
            <button className="btn btn-primary" type="submit">CHECKOUT</button>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <div> Lot 25, Hawks Landing Phase 1</div>
            <div> Date: 5/2/2016</div>
          </div>

          <div>
            <span>File #: 1072-XXXX</span>
          </div>

          <div className={styles.controls}>
            <button className="btn btn-primary" type="submit">CHECKOUT</button>
          </div>
        </div>

      </div>

    </div>
  );
}
