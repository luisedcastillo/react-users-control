import React from 'react';
import PropTypes from 'prop-types';
import User from './user';
import './user/userData/styles.css'

import {Grid, Row, Col} from  'react-flexbox-grid'

const renderProgress = () => {
    return 'Loading.....';
};

const renderUserItem = (users) => {
    return users.map(user => (
        /* jshint ignore:start */ // JSX is not supported
        <Col xs={12} md={4} lg={3} className="card" key={user.name}>
            <User user={user} ></User>
        </Col>
        /* jshint ignore:end */ // JSX is not supported
    ));
};

const UserList = ({users}) => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <Grid>
            <Row center="xs">
            {
                users    
                    ? renderUserItem(users)
                    : renderProgress()
                    
            }
            </Row>
        </Grid>
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