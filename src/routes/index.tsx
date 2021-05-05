import { Switch } from 'react-router-dom';

import Dashboard from '../pages';
import Route from './Route';

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  );
}

export default Routes;
