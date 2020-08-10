import React, { useEffect } from 'react';
import { Switch , Route, Redirect, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './static/App.css';
import Header from '../components/general/Header.jsx';
import Index from './sessions/Index.jsx';
import Register from '../components/registerlogin/Register.jsx';
import Login from '../components/registerlogin/Login.jsx';
import Logout from './authentication/Logout.jsx';
import Log from '../components/log/Log.jsx';
import Compare from '../components/compare/Compare.jsx';
import Loading from '../components/general/Loading.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authentication/actions.js';


function App() {
  // Get state from store
  const {apiPending, loggedIn} = useSelector(state => state.authenticate);

  // Get reference to dispatch function
  const dispatch = useDispatch();
  
  // Get current location
  const location = useLocation();
 
  useEffect(()=>{
    dispatch(authenticate());
  }, [dispatch]);

  return (
     <div>
          <Header loggedIn={loggedIn} />
          {!apiPending ? 
          <>
          <TransitionGroup component={null}>
          <CSSTransition key={location.key} in={true} timeout={800} classNames='fade'>
              <Switch location={location}>
                <Route exact path="/">
                  {loggedIn ? <Index /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                  {loggedIn ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/register">
                  {loggedIn ? <Redirect to="/" /> : <Register />}
                </Route>
                <Route path="/logout">
                  {loggedIn ? <Logout /> : <Redirect to="login" />}
                </Route>
                <Route exact path="/log">
                  {loggedIn ? <Log /> : <Redirect to="/login" />}
                </Route>
                <Route path="/compare">
                  {loggedIn ? <Compare /> : <Redirect to="/login" />}
                </Route>
                {/* if no routes matched redirect to homepage instead of serving 404*/}
                <Redirect to="/" />
              </Switch> 
            </CSSTransition>
        </TransitionGroup>
      </>
      :
      <Loading />}
      </div>
    
  );

}

export default App;