import { Switch } from 'react-router-dom';

import Dashboard from '../pages/home';
import User from '../pages/user';

import Route from './Route';

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/user" exact component={User} isPrivate />
    </Switch>
  );
}

export default Routes;
