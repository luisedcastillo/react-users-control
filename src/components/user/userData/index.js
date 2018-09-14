import React from 'react';
import UserActions from './user-actions';
import UserImage from './user-image';
import UserInfo from './user-info';
 
const UserData = () => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            User Data
            <UserImage></UserImage>
            <UserInfo></UserInfo>
            <UserActions></UserActions>
        </div>
     /* jshint ignore:end */
    );
};

export default UserData;