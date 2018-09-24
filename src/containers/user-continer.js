import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserById  } from './../selectors/users';
import { fetchUsers } from './../actions/fetchUsers';
import { updateUser } from './../actions/updateUser';

import EditUserForm from './../components/user/user-form/edit-user-form';
import ViewUserForm from './../components/user/user-form';
import ProgressIndicator from '../components/progress-indicator';

class UserContainer extends Component {

    componentDidMount() {
        if(!this.props.user){
            this.props.fetchUsers();
        }
    };

    handleSubmitUser = values => {
        const { id } = values;
        return this.props.updateUser(id, values);
    };

    handleSubmitUserSuccess = () => {
        this.handleOnBack();
    };
    
    handleOnBack = () => {
        this.props.history.goBack();
    };

    renderBody = user => (

        <Route path="/users/:id/edit" children={
           ({match}) => {
               const CustomerControl = match ? EditUserForm : ViewUserForm;
               return <CustomerControl
                       {...user}
                       onSubmit={this.handleSubmitUser} 
                       onBack={this.handleOnBack}></CustomerControl>
           } 
        } />
    )

    render(){

        const {user} = this.props;

        return (
            <div>
                {
                    user ? this.renderBody(user)
                         :  (<div className="progress-indicator">
                                <ProgressIndicator></ProgressIndicator>
                            </div>)
                }
            </div>
            
        );
    }

}

UserContainer.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object,
    fetchUsers: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    user: getUserById(state, props)
});

const mapDispatchToProps = {
    fetchUsers,
    updateUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserContainer));