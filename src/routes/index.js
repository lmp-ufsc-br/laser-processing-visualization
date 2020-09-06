import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import References from '../pages/References';
import Blog from '../pages/Blog';

import BlogRoutes from '../pages/Blog/routes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <BlogRoutes />
      <Route exact path="/references" component={References} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/signin" component={SignIn} isSign />
      <Redirect to="/" />
    </Switch>
  );
}
