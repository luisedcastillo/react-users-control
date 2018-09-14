import React,{ Component } from 'react';
import UserList from '../components/user-list';

class UserContainer extends Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
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