/**
 *
 */

import React, { Component } from 'react';
import styles from './dashboard.css';
import classnames from 'classnames';
import AccountSpot from './account-spot';
import CountyList from './county-list';
import OrderList from './order-list';
import Toolbar from '../../components/toolbar';

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

          <Toolbar title="My Order List" />

          <OrderList />

        </div>

      </div>
    )
  }

}

//
export default DashboardContainer;
