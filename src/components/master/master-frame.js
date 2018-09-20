import React from 'react';
import PropTypes from 'prop-types';
import MasterHeader from './master-header';

const MasterFrame = ({header, body}) => {
    return (
        /* jshint ignore:start */ // JSX is not supported
        <div>
            <MasterHeader title={header}></MasterHeader>
            <section>{body}</section>
            <footer>This is the footer</footer>
        </div>
        /* jshint ignore:end */ // JSX is not supported
    );
};

MasterFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.number.isRequired,
};

export default MasterFrame;