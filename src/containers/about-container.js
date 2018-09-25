import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, Row, Col } from 'react-flexbox-grid';


const AboutContainer = () => (
    /* jshint ignore:start */ // JSX is not supported
    <Grid >
        <Row center="xs">
            <Col xs={12} md={8}>
                <Paper className="about-container">
                    <Grid>
                        <Row start="xs">
                            <Col>
                                <Typography variant="display2" color="inherit" gutterBottom>
                               This is about information
                                </Typography>
                                <Typography variant="headline" color="inherit" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit sodales class facilisis, tristique dictum etiam at volutpat tempor suspendisse nostra conubia tempus odio nascetur, vehicula convallis ligula in justo nec sapien eleifend fermentum magna. Quam dictumst nec enim potenti natoque vivamus odio montes, fringilla viverra proin non leo mollis. 
                                </Typography>
                                <Typography variant="title" color="inherit">
                                Continue reading...
                                </Typography>
                        </Col>
                    </Row>
                </Grid>
            </Paper>
        </Col>
    </Row>
</Grid>
    
    /* jshint ignore:start */ // JSX is not supported
);

export default AboutContainer;