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
import Modal from '../../components/modal';
import PDFViewer from '../../components/pdf-viewer';
import { Link } from 'react-router';

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

        <PDFViewer file="https://www.verifyd.com/CLServicesDev/Api.ashx?ActiveBid&orderId=1036972" />

        <div className={styles.left}>

          <AccountSpot />

          <CountyList />

          <div className={styles.leftControls}>
            <Link to="/documents" className="btn btn-default"> <span className="glyphicon glyphicon-inbox" aria-hidden="true"></span> Documents </Link> <br />
            <Link to="/documents-search" className="btn btn-default"> <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search Documents</Link>
          </div>

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
