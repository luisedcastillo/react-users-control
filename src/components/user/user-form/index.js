import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Row, Col } from 'react-flexbox-grid';

import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

import UserImage from './../../../components/user/userData/user-image';

const ViewUserForm = ({user}) => {

    const { id, name, username, email, phone, website, gender } = user;

    return(
    <div>
        <Grid>
            <Row center="xs"> 
                <Col sm={12} lg={8}>
                <Paper className="form-container">
                    <Row center="xs">
                        <Col xs={1}>
                            <UserImage userId={id} gender={gender}></UserImage>
                        </Col>
                    </Row>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <Typography variant="headline" gutterBottom>
                                    {name}
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    {username}
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    {email}
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    {phone}
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    {website}
                                </Typography>
                            </Col>
                            <Col xsOffset={10} xs={2}>
                                <Button
                                    variant="contained"
                                    color="primary">
                                    Back
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
                </Col>
            </Row>
        </Grid>
    </div>
);
    }

ViewUserForm.propTypes = {
    user: PropTypes.object.isRequired,
}

export default ViewUserForm;