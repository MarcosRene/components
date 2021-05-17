import { Switch } from 'react-router-dom';

import SignIn from '../pages/signin';
import Dashboard from '../pages/home';
import User from '../pages/user';
import Help from '../pages/help';

import Route from './Route';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/user" component={User} isPrivate />
      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}

export default Routes;
