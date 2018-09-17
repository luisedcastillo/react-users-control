import React,{ Component } from 'react';
import { getUsers } from './../services/users-service';
import { toUsers } from './../services/user-mapper';
import UserList from '../components/user-list';
import ProgressIndicator from '../components/progress-indicator';
import './styles.css';

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
            // <div>
            //     {
            //     users
            //         ? <UserList users={users}></UserList>
            //         : (<div className="progress-indicator">
            //             <ProgressIndicator></ProgressIndicator>
            //            </div>)
            //     }
            // </div>
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

export default UserContainer;