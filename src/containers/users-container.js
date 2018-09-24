import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setUsers } from './../actions';
import { getUsersFromState } from './../reducers';

import UserList from '../components/user-list';
import ProgressIndicator from '../components/progress-indicator';
import './styles.css';

class UsersContainer extends Component {

    componentDidMount() {
        //Redux implementation
        const {fillUsers} = this.props;
        fillUsers();
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

const mapDispatcherToProps = dispatch => ({
    fillUsers: () => dispatch(setUsers())
});

const mapStateToProps = state => ({
    users: getUsersFromState(state)
});

export default connect(mapStateToProps, mapDispatcherToProps)(UsersContainer);

//export default UsersContainer;