/**
 *
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Viewport from '../components/viewport';

import LoginContainer from '../containers/login';
import DashboardContainer from '../containers/dashboard';

/**
 *
 */

export default (
  <Route path="/" component={Viewport}>
    <IndexRoute component={LoginContainer}/>
    <Route path="/dashboard" component={DashboardContainer} />
  </Route>
);
