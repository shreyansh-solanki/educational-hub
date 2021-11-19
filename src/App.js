import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Switch } from 'react-router';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
