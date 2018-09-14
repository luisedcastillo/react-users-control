import React from 'react';
import Button from '@material-ui/core/Button';

const UserActions = () => {
    return (
         /* jshint ignore:start */ // JSX is not supported
         <div>
            <Button size="small" color="primary">
                Delete
            </Button>
            <Button size="small" color="primary">
                Edit
            </Button>
            {/* <Button size="small" color="primary">
                View
            </Button> */}
          </div>
        /* jshint ignore:end */
    );
};

export default UserActions;