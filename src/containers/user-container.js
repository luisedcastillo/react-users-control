import React,{ Component } from 'react';
import { getUsers } from './../services/users-service';
import { toUsers } from './../services/user-mapper';
import UserList from '../components/user-list';

class UserContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            users: null
        };
    }

    fillUsers(){
        getUsers()
        .then(data => {
            const users = toUsers(data);
            this.setState({
                users
            });
        })
        .catch(error => {
            console.log('Error');
            console.error(error);
        });
    }

    componentDidMount() {
        this.fillUsers();
    }
    
    render() {
        const {users} = this.state;
        return (
            /* jshint ignore:start */ // JSX is not supported
            <div>
                {
                users
                    ? <UserList users={users}></UserList>
                    : 'Cargando....!!'
                }
            </div>
            /* jshint ignore:end */
        );
    }
}

export default UserContainer;