import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './styles.css';

const HomeContainer = () => {
    return(
        /* jshint ignore:start */ // JSX is not supported
        <Grid>
            <Row center="xs">
                <Col xs={10}>
                    <Paper className="home-container">
                        <img src={require(`./../assets/images/hexaware2.jpeg`)} alt="logo" className="banner"></img>
                        <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                        Financial
                        </Typography>
                        <Typography variant="title" align="center" color="textSecondary" paragraph>
                        Hexaware Technologies Limited (NSE:HEXAWARE), is a ₹126.50b small-cap, which operates in the IT services industry based in India. Technology has become a vital component of every industry, bringing unprecedented opportunities for growth, along with challenges and competition from traditional and emerging areas. Innovations such as augmented and virtual reality, blockchain, machine learning and autonomous vehicles are paving the way for tech sector growth and branching out into new applications. However, more specifically in the IT service industry, tech analysts are forecasting a positive double-digit growth of 15.1% in the upcoming year , and a massive growth of 58.1% over the next couple of years. However this rate still came in below the growth rate of the Indian stock market as a whole. Is now the right time to pick up some shares in tech companies? Today, I will analyse the industry outlook, as well as evaluate whether Hexaware Technologies is lagging or leading its competitors in the industry.
                        </Typography>
                    </Paper>
                </Col>
            </Row>
        </Grid>

        /* jshint ignore:end */ // JSX is not supported
    );
};

export default HomeContainer;