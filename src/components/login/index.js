import React, { Component } from 'react';
import logo from './../../image/Refactory--logo-9-white-2.png';
import './style.css';
function Login(){
  return(
  <div className="panel-form">
    <img src={logo} className="App-logo" />
    <input className="input-login" type="email" placeholder="Email" />
    <input className="input-login" type="password" placeholder="Password" />
    <button className="btn-orange" >Sign In</button>
  </div>);
}

export default Login;
