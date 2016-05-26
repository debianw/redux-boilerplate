/**
 *
 */

import React, { Component } from 'react';
import styles from './dashboard.css';
import classnames from 'classnames';
import AccountSpot from './account-spot';
import CountyList from './county-list';
import OrderList from './order-list';
import Toolbar from '../toolbar';
import Modal from '../modal';
import PDFViewer from '../pdf-viewer';
import { Link } from 'react-router';

/**
 *
 */

class DashboardContainer extends Component {

  /**
   *
   */

  render() {
    const {
      checkout,
      cancelCheckout,
      openOrder,
      order
    } = this.props;

    return (
      <div className={styles.root}>

        {order.open_runsheet && (<PDFViewer
                                    onDone={checkout}
                                    onCancel={cancelCheckout}
                                    file="https://www.verifyd.com/CLServicesDev/Api.ashx?ActiveBid&orderId=1036972" />)}


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

          <OrderList openOrder={openOrder} />

        </div>

      </div>
    )
  }

}

//
export default DashboardContainer;
