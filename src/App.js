import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Switch } from 'react-router';
import './App.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Button } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

import './styles/main.scss';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === 'dark' ? '#111' : '#eee')};
  color: ${props => (props.theme.mode === 'dark' ? '#eee' : '#111')}
}
`;

function App() {
  const [theme, setTheme] = useState({ mode: 'light' });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ProfileProvider>
          <Switch>
            <PublicRoute path="/signin">
              <SignIn />
            </PublicRoute>
            <PrivateRoute path="/videos">
              <VideoPlayer />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </ProfileProvider>
        <Button
          style={{
            position: 'relative',
            top: -750,
            left: '93%',
          }}
          onClick={e =>
            setTheme(
              theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' }
            )
          }
        >
          <FontAwesomeIcon icon={faMoon} />
        </Button>
      </>
    </ThemeProvider>
  );
}

export default App;
