import AppProvider from './contexts';

import Home from './pages';

import './global.scss';
function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
