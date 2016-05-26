/**
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/dashboard';

import {
  checkout,
  cancelCheckout,
  openOrder
} from '../../actions/order';

/**
 *
 */

const mapStateToProps = (state) => {
  return {
    order: state.order
  }
}

/**
 *
 */

export default connect(
  mapStateToProps,
  {
    openOrder,
    checkout,
    cancelCheckout
  }
)(Dashboard);
