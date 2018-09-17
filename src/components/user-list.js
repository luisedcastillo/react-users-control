import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

const renderProgress = () => {
    return 'Loading.....';
};

const renderUserItem = (users) => {
    return users.map(user => (
        /* jshint ignore:start */ // JSX is not supported
        <User user={user} key={user.name}></User>
        /* jshint ignore:end */ // JSX is not supported
    ));
};

const UserList = ({users}) => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            {
                users    
                    ? renderUserItem(users)
                    : renderProgress()
                    
            }
        </div>
     /* jshint ignore:end */
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })).isRequired,
};

export default UserList;