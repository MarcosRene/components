import { Router } from 'react-router-dom';
import AppProvider from './contexts';

import Routes from './routes';
import './global.scss';

import history from './services/history';

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
