import React, { Component } from 'react';
import UserContainer from './containers/user-container';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      
      /* jshint ignore:start */ // JSX is not supported
      <UserContainer></UserContainer>
      /* jshint ignore:end */
    );
  }
}

export default App;
