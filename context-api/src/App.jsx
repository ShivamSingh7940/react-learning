import React from 'react';
import './App.css';
import UserContextProvider, { UserContext } from '../Context/UserContext.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <UserContextProvider>
      <UserContext.Consumer>
        {({ user, setUser }) => (
          <div>
            {/* <h1>Hey</h1> */}
            <Login/>
            <Profile/>
          </div>
        )}
      </UserContext.Consumer>
    </UserContextProvider>
  );
}

export default App;
