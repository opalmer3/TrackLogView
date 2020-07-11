import React, { useState, useEffect } from 'react';
import { Switch , Route, Redirect, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Axios from 'axios';
import Header from './pages/components/Header.jsx';
import Index from './pages/Index.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';
import Log from './pages/Log.jsx';
import Compare from './pages/Compare.jsx';

function App() {
  // Set state for user logged in and authenticate
  const [loggedIn, setLoggedIn] = useState(null);
  const [apiFinished, setApiFinished] = useState(false);
  const location = useLocation();
  
  async function authenticate(){
    let response = await Axios.get("/api/isloggedin");
    setLoggedIn(response.data.loggedIn);
    setApiFinished(true);
  }

  useEffect(()=>{
    authenticate();
  }, []);

  return (
     <div>
        {apiFinished && 
        <>
          <Header loggedIn={loggedIn} />

          <TransitionGroup component={null}>
          <CSSTransition key={location.key} in={true} timeout={800} classNames='fade'>
              <Switch location={location}>
                <Route exact path="/">
                  {loggedIn ? <Index /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                  {loggedIn ? <Redirect to="/" /> : <Login authenticate={authenticate} />}
                </Route>
                <Route path="/register">
                  {loggedIn ? <Redirect to="/" /> : <Register />}
                </Route>
                <Route path="/logout">
                  {loggedIn ? <Logout authenticate={authenticate} /> : <Redirect to="login" />}
                </Route>
                <Route exact path="/log">
                  {loggedIn ? <Log /> : <Redirect to="/login" />}
                </Route>
                <Route path="/compare">
                  {loggedIn ? <Compare /> : <Redirect to="/login" />}
                </Route>
                {/* if no routes matched redirect to homepage instead of serving */}
                <Redirect to="/" />
              </Switch> 
            </CSSTransition>
        </TransitionGroup>
      </>}
      </div>
    
  );
}

export default App;
