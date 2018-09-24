import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { Grid, Row, Col } from 'react-flexbox-grid';

// import './styles.css';

const EditUserForm = () => {
    return(
        /* jshint ignore:start */ // JSX is not supported
        <div>
            <Grid>
                <Row center="xs"> 
                    <Col sm={12} lg={8}>
                    <Paper className="form-container">
                        <Avatar>
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Edit</Typography>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="Name"
                                        fullWidth
                                        autoComplete="fname"
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="User Name"
                                        fullWidth
                                        autoComplete="fname"
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="Email"
                                        fullWidth
                                        autoComplete="fname"
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="Phone"
                                        fullWidth
                                        autoComplete="fname"
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="Website"
                                        fullWidth
                                        autoComplete="fname"
                                    />
                                </Col>
                                <Col xs={2}>
                                    <Button
                                    variant="contained"
                                    color="secondary">
                                    Cancel
                                    </Button>
                                    <Button
                                    variant="contained"
                                    color="primary">
                                    Save
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Paper>
                    </Col>
                </Row>
            </Grid>
        </div>
        /* jshint ignore:end */ // JSX is not supported
    );
};


export default EditUserForm;