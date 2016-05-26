/**
 *
 */

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import order from './order';

/**
 *
 */

const rootReducer = combineReducers({
  routing,
  order
});

//
export default rootReducer;
