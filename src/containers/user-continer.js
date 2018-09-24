import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import EditUserForm from './../components/user/user-form/edit-user-form';
import ViewUserForm from './../components/user/user-form';

class UserContainer extends Component {

    renderBody = () => (

        <Route path="/users/:id/edit" children={
           ({match}) => {
               const CustomerControl = match ? EditUserForm : ViewUserForm;
               return <CustomerControl></CustomerControl>
           } 
        } />
    )

    render(){
        return (
            <div>
                USER INFO
                {
                    this.renderBody()
                }
            </div>
            
        );
    }

}

export default UserContainer;