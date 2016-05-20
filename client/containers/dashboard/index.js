/**
 *
 */

import React, { Component } from 'react';
import styles from './dashboard.css';
import classnames from 'classnames';
import AccountSpot from './account-spot';
import CountyList from './county-list';
import OrderList from './order-list';

/**
 *
 */

class DashboardContainer extends Component {

  /**
   *
   */

  render() {
    return (
      <div className={styles.root}>

        <div className={styles.left}>

          <AccountSpot />

          <CountyList />

        </div>

        <div className={styles.content}>

          <div className={styles.toolbar}>
            <h2> My Order List </h2>
          </div>

          <OrderList />

        </div>

      </div>
    )
  }

}

//
export default DashboardContainer;
