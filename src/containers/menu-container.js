import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

import './styles.css';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    // menuButton: {
    //   marginLeft: -12,
    //   marginRight: 20,
    // },
  };



class MenuContainer extends Component{

    constructor(){
        super();

        this.state = {
            value: 'home',
          };
    }

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.history.push(`/${value}`);
    }

    render(){
        const { classes } = this.props;
        const { value } = this.state;

        return(
        /* jshint ignore:start */ // JSX is not supported
        <header className={classes.root}>
            <AppBar position="static" color="default" >
                <Toolbar>
                <img src={require(`./../assets/images/users.svg`)} alt="logo" className="logo"></img>
                <Typography variant="title" color="inherit" className={classes.grow}>
                    Users Manager
                </Typography>
                <BottomNavigation
                    className="menu" 
                    color="inherit"
                    value={value}
                    onChange={this.handleChange} 
                    showLabels>
                    <BottomNavigationAction label="Home" value='home' icon={<HomeIcon />} />
                    <BottomNavigationAction label="Users" value='Users' icon={<PersonIcon />} />
                    <BottomNavigationAction label="About" value='About' icon={<InfoIcon />} />
                </BottomNavigation>
              </Toolbar>
            </AppBar>
        </header>
        /* jshint ignore:end */ // JSX is not supported
        );
    }
}

MenuContainer.propTypes = {

};

//export default MasterMenu;
export default withRouter(withStyles(styles)(MenuContainer));