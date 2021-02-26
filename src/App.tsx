import React from 'react';
import GlobalStyle from './styles/global';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
  return (
    <>
      <Dashboard />
      <GlobalStyle/>
    </>
  );
}

export default App;
