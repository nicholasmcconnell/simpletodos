import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import UserContext from './context/UserContext';
// import SuccessContext from './context/SuccessContext';
import Axios from 'axios';

import Header from './components/layout/Header'
import Home from './components/pages/Home.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import CreateTodos from './components/todo/CreateTodos';
import GetTodos from './components/todo/GetTodos';
import SearchTodos from './components/todo/SearchTodo';

import './App.css';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  // const [todoSuccess, setTodoSuccess ] = useState();

  const history = useHistory();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem('lastVisited', '');
        localStorage.setItem('auth-token', '');
        token = '';
        return;
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
          {/* <SuccessContext.Provider value={{ todoSuccess, setTodoSuccess }}> */}
            <Header />
            {/* <div className='page'> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/createtodos' component={CreateTodos} />
              <Route path='/gettodos' component={GetTodos} />
              <Route path='/searchtodos' component={SearchTodos} />
            </Switch>
            {/* </div> */}
          {/* </SuccessContext.Provider> */}
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
