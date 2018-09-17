import React from 'react';
import UserActions from './user-actions';
import UserImage from './user-image';
import UserInfo from './user-info';
import PropTypes from 'prop-types';
import {convertGenderToUrlPath} from './../../../services/user-converters';
 
//Design
import './styles.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// import Divider from '@material-ui/core/Divider';
// import Person from '@material-ui/icons/Person';

const UserData = ({user}) => {

    const {id,  name, email, phone, gender } = user;
    const genderUrl = convertGenderToUrlPath(gender);

    return (
         /* jshint ignore:start */ // JSX is not supported
        // image="https://picsum.photos/300/200/?image=872&blur"
        // https://randomuser.me/api/portraits/men/4.jpg
        // https://picsum.photos/300/200/?image=257
        <Card className="card">
          <CardActionArea>
            <CardMedia
                className="card-media"
                image={require(`./../../../assets/images/${genderUrl}-back.jpg`)}
                title="Male User"
            />
            <CardContent className="card-content">
                <UserImage userId={id} gender={gender}></UserImage>
                <UserInfo name={name} email={email} phone={phone}></UserInfo>
            </CardContent>
            </CardActionArea>
            <CardActions>
            {/* <Divider light /> */}
            <UserActions></UserActions>
          </CardActions>
        </Card>
     /* jshint ignore:end */
    );
};

UserData.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })
};

export default UserData;