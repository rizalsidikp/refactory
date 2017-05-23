import React, { Component } from 'react';
import logo from './../image/Refactory--logo-9-white-2.png';
import './style.css';
import Title from './../components/title'
import Login from './../components/login'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Title name="Refactory Login Page" />
          <Login />
      </div>
    );
  }
}

export default App;
