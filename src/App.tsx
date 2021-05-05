import { Router, useHistory } from 'react-router-dom';
import AppProvider from './contexts';

// import Home from './pages';
// import DefaultLayout from './pages/_layouts/default';
import Routes from './routes';
import './global.scss';

function App() {
  const history = useHistory();

  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
