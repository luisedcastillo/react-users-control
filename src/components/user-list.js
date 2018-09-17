import React from 'react';
import User from './user';

const user = {
    id: 100,
    name: 'Luis Ramirez',
    phone: '123 123 123 123',
    email: 'todook@todito.com.mx'
}

const UserList = () => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            User List
            <User user={user}></User>
        </div>
     /* jshint ignore:end */
    );
};

export default UserList;