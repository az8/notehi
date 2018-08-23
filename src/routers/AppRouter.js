import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Notehi from '../components/Notehi';
import EditNote from '../components/EditNote';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotehiTrial from '../components/trial/NotehiTrial';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={NotehiTrial} exact={true} />
        <PrivateRoute path="/home" component={Notehi} />
        <PrivateRoute path="/edit/:id" component={EditNote} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
