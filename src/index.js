import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Login from './auth/login';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Login />
  , document.getElementById('root'));
registerServiceWorker();
