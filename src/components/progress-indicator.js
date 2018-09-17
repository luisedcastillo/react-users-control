import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {Grid, Row, Col} from  'react-flexbox-grid'

const ProgressIndicator = () => {
    return (
       /* jshint ignore:start */ // JSX is not supported
        <Grid>
            <Row center="xs">
                <Col xs={12}>
                    <CircularProgress size={50}></CircularProgress>
                    <Typography component="p">
                        Cargando....
                    </Typography>
                </Col>
            </Row>
        </Grid>
        /* jshint ignore:end */
    )
}

export default ProgressIndicator;