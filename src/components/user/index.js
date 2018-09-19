import React from 'react';
import PropTypes from 'prop-types';
import UserData from './userData';

import Grow from '@material-ui/core/Grow'

const User = ({user}) => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            <Grow In={user}>
                <UserData user={user}></UserData>
            </Grow>
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