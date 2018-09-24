import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import Web from '@material-ui/icons/Web';
import Person from '@material-ui/icons/Person';


import {convertGenderToUrlPath} from './../../../services/user-converters';

const ViewUserForm = ({id, name, username, email, phone, website, gender, onBack}) => {

    //const { id, name, username, email, phone, website, gender } = user;
    const genderUrl = convertGenderToUrlPath(gender);

    return(
        <Grid>
            <Row center="xs">
                <Col sm={12} lg={6}>
                      <Card className="card"> 
                        <CardMedia
                            className="card-media"
                            image={require(`./../../../assets/images/${genderUrl}-back.jpg`)}
                            title="Male User"
                        />
                        <CardContent className="card-content">

                        <Grid>
                            <Row start="xs" >
                                <Col xs={12} sm={6} lg={4}>
                                    <Avatar
                                    alt={id.toString()}
                                    src={`https://randomuser.me/api/portraits/${genderUrl}/${id}.jpg`}
                                    className="user-avatar-details"  />
                                </Col>
                                <Col xs={12} sm={6} lg={8}>
                                    <Typography gutterBottom variant="headline" component="h2" className="name-text">
                                        {name}
                                    </Typography>
                                </Col>
                            </Row>
                            <Row start="xs" className="user-content">
                                <Col xs={1}>
                                    <PhoneAndroid></PhoneAndroid>
                                </Col>
                                <Col xs={11} sm={5}>
                                    <Typography component="p">
                                        {phone}
                                    </Typography>
                                </Col>
                                <Col xs={1}>
                                    <MailOutline></MailOutline>
                                </Col>
                                <Col xs={11} sm={5}>
                                    <Typography component="p">
                                        {email}
                                    </Typography>
                                </Col>
                            </Row>
                            <Row start="xs">
                                <Col xs={1}>
                                    <Web></Web>
                                </Col>
                                <Col xs={11} sm={5}>
                                    <Typography component="p">
                                        {website}
                                    </Typography>
                                </Col>
                                <Col xs={1}>
                                    <Person></Person>
                                </Col>
                                <Col xs={11} sm={5}>
                                    <Typography component="p">
                                        {username}
                                    </Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col xsOffset={10} xs={2}>
                                    <Button
                                        onClick={onBack}
                                        variant="contained"
                                        color="primary">
                                        Back
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Grid>
        
);
    }

ViewUserForm.propTypes = {
    user: PropTypes.object.isRequired,
    onBack: PropTypes.func,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
}

export default ViewUserForm;