import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App.jsx';
import * as serviceWorker from './serviceWorker';
import { authenticate } from './store/authentication/reducers.js';
import { get_sessions } from './store/sessions/reducers.js'

const rootReducer = combineReducers({authenticate, get_sessions});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  ,document.getElementById('root')
);

serviceWorker.unregister();
