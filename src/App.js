import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

import React from 'react';
import FrontPage from './FrontPage';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <h1>Ticket App</h1>
      {!isAuthenticated ? (
        <button onClick={loginWithRedirect}>Log In</button>
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </div>
      )}
      <FrontPage />
    </div>
  );
}

export default App;


