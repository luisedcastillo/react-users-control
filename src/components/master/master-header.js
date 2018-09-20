import React from 'react';
import PropTypes from 'prop-types';

const MasterHeader = ({title}) => {
    return (
        /* jshint ignore:start */ // JSX is not supported
        <header>
            <h2>{title}</h2>
        </header>
        /* jshint ignore:end */ // JSX is not supported
    );
};

MasterHeader.propTypes = {
    title: PropTypes.string.isRequired,
};