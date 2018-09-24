import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const UserActions = ({baseUrl, userId}) => {
    return (
         /* jshint ignore:start */ // JSX is not supported
         <div>
            <Link to={`${baseUrl}/${userId.toString()}`}>
                <Button size="small" color="primary">
                    View
                </Button>
            </Link>
            <Link to={`${baseUrl}/${userId.toString()}/edit`}>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </Link>
          </div>
        /* jshint ignore:end */
    );
};

UserActions.propTypes = {
    baseUrl: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
}

export default UserActions;