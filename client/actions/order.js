/**
 *
 */

import {
  ORDER_CHECKINGOUT,
  ORDER_CHECKOUT,
  ORDER_OPEN_RUNSHEET,
  ORDER_CLOSE_RUNSHEET
} from '../constants';

/**
 *
 */

const checkingOutAction = () => {
  return {
    type: ORDER_CHECKINGOUT
  }
}

/**
 *
 */

const openRunsheetAction = () => {
  return {
    type: ORDER_OPEN_RUNSHEET
  };
}

/**
 *
 */

const closeRunsheetAction = () => {
  return {
    type: ORDER_CLOSE_RUNSHEET
  }
}

/**
 *
 */

export const openOrder = () => {
  return (dispatch, getState) => {
    dispatch( openRunsheetAction() );
  }
}

/**
 *
 */

export const checkout = () => {

  return (dispatch, getState) => {
    dispatch( closeRunsheetAction() );
  }

}

/**
 *
 */

export const cancelCheckout = () => {

  return (dispatch, getState) => {
    dispatch( closeRunsheetAction() );
  }

}
