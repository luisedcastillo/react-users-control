import React from 'react';

import './styles.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';

const UserInfo = () => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        <div>
            <Grid className="user-info">
                <Row>
                    <Col>
                        <Typography gutterBottom variant="headline" component="h2">
                            Luis Castillo
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <PhoneAndroid></PhoneAndroid>
                    </Col>
                    <Col xs={10}>
                        <Typography component="p">
                            614 - 412 33 44
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <MailOutline></MailOutline>
                    </Col>
                    <Col xs={10}>
                        <Typography component="p">
                            luiseduardo@hexaware.com
                        </Typography>
                    </Col>
                </Row>
            </Grid>
        </div>
     /* jshint ignore:end */
    );
};

export default UserInfo;