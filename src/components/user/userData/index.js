import React from 'react';
import UserActions from './user-actions';
import UserImage from './user-image';
import UserInfo from './user-info';
 
//Design
import './styles.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



// import Divider from '@material-ui/core/Divider';
// import Person from '@material-ui/icons/Person';


const UserData = ({classes}) => {
    return (
         /* jshint ignore:start */ // JSX is not supported
        // image="https://picsum.photos/300/200/?image=872&blur"
        // https://randomuser.me/api/portraits/men/4.jpg
        // https://picsum.photos/300/200/?image=257
        <Card className="card">
          <CardActionArea>
            <CardMedia
                className="card-media"
                image={require('./../../../assets/images/man-back.jpg')}
                title="Male User"
            />
            <CardContent className="card-content">
                <UserImage></UserImage>
                <UserInfo></UserInfo>
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

export default UserData;