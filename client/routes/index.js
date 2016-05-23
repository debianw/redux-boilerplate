/**
 *
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Viewport from '../components/viewport';

import LoginContainer from '../containers/login';
import DashboardContainer from '../containers/dashboard';
import Documents from '../containers/documents';
import DocumentsSearch from '../containers/documents-search';

/**
 *
 */

export default (
  <Route path="/" component={Viewport}>
    <IndexRoute component={LoginContainer}/>
    <Route path="/dashboard" component={DashboardContainer} />
    <Route path="/documents" component={Documents} />
    <Route path="/documents-search" component={DocumentsSearch} />
  </Route>
);
