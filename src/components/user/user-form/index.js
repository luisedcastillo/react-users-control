import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Row, Col } from 'react-flexbox-grid';

import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

const ViewUserForm = () => (
    <div>
        <Grid>
            <Row center="xs"> 
                <Col sm={12} lg={8}>
                <Paper className="form-container">
                    <Avatar>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="headline">View</Typography>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <Typography variant="headline" gutterBottom>
                                    Luis Eduardo Castillo Ramirez
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    luiseduardoc
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    luiseduardoc@hexaware.com
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    (614) 123 12 12
                                </Typography>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Typography variant="subheading" gutterBottom>
                                    www.hexaware.com
                                </Typography>
                            </Col>
                            <Col xs={2}>
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

export default ViewUserForm;