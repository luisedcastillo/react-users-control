import React, { Component } from 'react';
import UsersContainer from './containers/users-container';
import MenuContainer from './containers/menu-container';
import HomeContainer from './containers/home-container';
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
      <div>
        <MenuContainer></MenuContainer>
        <Grid>
          <Row>
            <Col>
              <HomeContainer></HomeContainer>
            </Col>
          </Row>
        </Grid>
        
       
        {/* <UsersContainer></UsersContainer> */}
      </div>
      
    );
  }
}

export default App;
