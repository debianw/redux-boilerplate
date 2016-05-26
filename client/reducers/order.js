/**
 *
 */

import {
  ORDER_OPEN_RUNSHEET,
  ORDER_CLOSE_RUNSHEET
} from '../constants';

/**
 *
 */

const order = ( state = {}, action ) => {

  switch (action.type) {

    //
    case ORDER_OPEN_RUNSHEET:
      return {
        ...state,
        open_runsheet: true
      }
    break;

    //
    case ORDER_CLOSE_RUNSHEET:
      return {
        ...state,
        open_runsheet: false
      }
    break;

    //
    default:
      return state;
    break;
  }
}

//
export default order;
