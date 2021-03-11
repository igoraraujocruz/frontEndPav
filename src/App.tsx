import React from 'react';
import GlobalStyle from './styles/global';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Login />
      </AppProvider>
      <GlobalStyle/>
    </>
  );
}

export default App;
