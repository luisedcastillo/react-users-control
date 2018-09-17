import React from 'react';
import PropTypes from 'prop-types';
import UserData from './userData';

const User = ({user}) => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            <UserData user={user}></UserData>
        </div>
     /* jshint ignore:end */
    );
};

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })
};

export default User;