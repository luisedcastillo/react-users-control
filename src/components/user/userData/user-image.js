import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '@material-ui/core/Avatar';

const UserImage = () => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            <Grid className="user-info">
                <Row center="xs">
                    <Col>
                        <Avatar
                        alt="Luis Castillo"
                        src="https://randomuser.me/api/portraits/men/4.jpg"
                        className="user-avatar"  />
                    </Col>
                </Row>
            </Grid>
        </div>
     /* jshint ignore:end */
    );
};

export default UserImage;