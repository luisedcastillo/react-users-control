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
            console.log('Aqui');
            const users = toUsers(data);
            console.log(users);
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
        //console.log(this.state.users);
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        
    }

    render() {
        return (
            /* jshint ignore:start */ // JSX is not supported
            <div>
                User Container
                <UserList></UserList>
            </div>
            /* jshint ignore:end */
        );
    }
}

export default UserContainer;