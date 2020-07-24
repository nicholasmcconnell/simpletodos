import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Header from './components/layout/Header'
import Home from './components/pages/Home.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import UserContext from './context/UserContext';

import './App.css';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }

      const tokenRes = await Axios.post(
        '/api/users/tokenIsValid',
        null,
        { headers: { 'x-auth-token': token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get('/api/users/', {
          headers: { 'x-auth-token': token }
        });
        setUserData({
          token,
          user: userRes.data
        })
      }
    };
    checkLoggedIn();
  }, [])

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
