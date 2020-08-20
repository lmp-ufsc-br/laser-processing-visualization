import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import LaserMatter from '../pages/LaserMatter';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import References from '../pages/References';
import Resistance from '../pages/Resistance';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/laser-matter" component={LaserMatter} />
      <Route exact path="/resistance" component={Resistance} />
      <Route exact path="/references" component={References} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/signin" component={SignIn} isSign />
      <Redirect to="/" />
    </Switch>
  );
}
