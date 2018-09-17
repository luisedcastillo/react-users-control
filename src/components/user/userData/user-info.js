import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';

const UserInfo = ({name, email, phone}) => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            <Grid className="user-info">
                <Row>
                    <Col>
                        <Typography gutterBottom variant="headline" component="h2" className="name-text">
                            {name}
                        </Typography>
                    </Col>
                </Row>
                <Row className="info-text" start="xs">
                    <Col xs={2}>
                        <PhoneAndroid></PhoneAndroid>
                    </Col>
                    <Col xs={10}>
                        <Typography component="p">
                            {phone}
                        </Typography>
                    </Col>
                </Row>
                <Row className="info-text"  start="xs">
                    <Col xs={2}>
                        <MailOutline></MailOutline>
                    </Col>
                    <Col xs={10}>
                        <Typography component="p">
                            {email}
                        </Typography>
                    </Col>
                </Row>
            </Grid>
        </div>
     /* jshint ignore:end */
    );
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default UserInfo;