import React from 'react';
import PropTypes from 'prop-types';
import { convertGenderToUrlPath } from '../../../services/user-converters'

import './styles.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '@material-ui/core/Avatar';

const UserImage = ({userId, gender}) => {

    const genderUrl = convertGenderToUrlPath(gender);

    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            <Grid className="user-info">
                <Row center="xs">
                    <Col>
                        <Avatar
                        alt={userId.toString()}
                        src={`https://randomuser.me/api/portraits/${genderUrl}/${userId}.jpg`}
                        className="user-avatar"  />
                    </Col>
                </Row>
            </Grid>
        </div>
     /* jshint ignore:end */
    );
};

UserImage.propTypes = {
    userId: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
};

export default UserImage;