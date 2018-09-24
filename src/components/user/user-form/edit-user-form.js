import React from 'react';
import PropTypes from 'prop-types';

import { reduxForm, Field } from 'redux-form';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {convertGenderToUrlPath} from './../../../services/user-converters';


const MyCustomField = ({input, meta, type, name, label}) => (
    <TextField
        {...input}
        error={meta.error}
        required
        type={type ? type : 'text'}
        id={name}
        name={name}
        label={label}
        value={name}
        fullWidth
        autoComplete={name}
    />
);

const EditUserForm = ({user, onBack, onSubmit, submitting}) => {
    const { id, gender } = user;
    const genderUrl = convertGenderToUrlPath(gender);

    return(
        /* jshint ignore:start */ // JSX is not supported
        <div>
            <Grid>
                <Row center="xs"> 
                    <Col sm={12} lg={8}>
                    <Paper className="form-container">
                        <form onSubmit={onSubmit}>
                            <Grid>
                            <Row center="xs">
                                <Col xs={12}>
                                    <Avatar
                                        alt={id.toString()}
                                        src={`https://randomuser.me/api/portraits/${genderUrl}/${id}.jpg`}
                                        className="user-avatar-edit"  />
                                </Col>
                                <Col xs={12} className="user-content">
                                    <Typography variant="headline">User Information</Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Field 
                                        name="name"
                                        type="text"
                                        label="Name"
                                        component={MyCustomField}>
                                    </Field>
                                </Col>
                                <Col xs={12} sm={6}>
                                     <Field 
                                        name="username"
                                        type="text"
                                        label="User Name"
                                        component={MyCustomField}>
                                    </Field>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Field 
                                        name="email"
                                        type="text"
                                        label="Email"
                                        component={MyCustomField}>
                                    </Field>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Field 
                                        name="phone"
                                        type="text"
                                        label="Phone"
                                        component={MyCustomField}>
                                    </Field>                                
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Field 
                                        name="website"
                                        type="text"
                                        label="Website"
                                        component={MyCustomField}>
                                    </Field>    
                                </Col>
                                </Row>
                                <Row end="xs" className="user-content">
                                <Col xs={5} sm={3} md={2}>
                                    <Button 
                                        disabled={submitting}
                                        onClick={onBack}
                                        fullWidth
                                        variant="contained"
                                        color="secondary">
                                        Cancel
                                    </Button>
                                </Col>
                                <Col xs={4} sm={2} md={1}>
                                    <button type="submit" disabled={submitting}>Aceptar</button>
                                    <Button
                                        type="submit"
                                        disabled={submitting}
                                        fullWidth
                                        variant="contained"
                                        color="primary">
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                        </form>
                    </Paper>
                    </Col>
                </Row>
            </Grid>
        </div>
        /* jshint ignore:end */ // JSX is not supported
    );
};

EditUserForm.propTypes = {
    user: PropTypes.object.isRequired,
    onBack: PropTypes.func,
}

const reduxFormConfig = {
    form: "EditUserForm"
}

export default reduxForm(reduxFormConfig)(EditUserForm);