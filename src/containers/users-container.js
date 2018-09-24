import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUsers } from './../actions/fetchUsers';
import { getUsers } from './../selectors/users';


import UserList from '../components/user-list';
import ProgressIndicator from '../components/progress-indicator';
import './styles.css';

class UsersContainer extends Component {

    componentDidMount() {
        //Redux implementation
        const {fetchUsers} = this.props;
        fetchUsers();
    }
  
    render() {
        const {users} = this.props;
        return (
            /* jshint ignore:start */ // JSX is not supported
            <div>
                {
                    users
                        ? <UserList users={users}></UserList>
                        : (<div className="progress-indicator">
                            <ProgressIndicator></ProgressIndicator>
                        </div>)
                }
            </div>
            /* jshint ignore:end */
        );
    }
}

UsersContainer.propTypes = {
    fillUsers: PropTypes.func.isRequired,
    users: PropTypes.array,
};

const mapDispatcherToProps = {
    fetchUsers
};

const mapStateToProps = state => ({
    users: getUsers(state)
});

export default connect(mapStateToProps, mapDispatcherToProps)(UsersContainer);

//export default UsersContainer;