import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UsersContainer from './containers/users-container';
import MenuContainer from './containers/menu-container';
import HomeContainer from './containers/home-container';
import AboutContainer from './containers/about-container';
import UserContainer from './containers/user-continer';
import './App.css';

import {Grid, Row, Col} from  'react-flexbox-grid';

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
      // <UsersContainer></UsersContainer>
      /* jshint ignore:end */
      <Router>
        <div>
          <MenuContainer></MenuContainer>
          <Grid>
            <Row>
              <Col>
                  <div>
                      <Route exact path="/" component={HomeContainer}></Route>
                      <Route exact path="/home" component={HomeContainer}></Route>
                      <Route exact path="/users" component={UsersContainer}></Route>
                      <Route exact path="/about" component={AboutContainer}></Route>
                      <Route path="/users/:id" component={UserContainer}></Route>
                  </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
      
    );
  }
}

export default App;
