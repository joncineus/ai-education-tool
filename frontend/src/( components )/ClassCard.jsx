import React from 'react';
import PropTypes from 'prop-types';

function ClassCard () {
    return (
        <div className="class-card">
            <h2 className="class-card-title"> Bio 101</h2>
            <p className="class-card-description">Class</p>
            <p className="class-card-teacher">Teacher</p>
            <p className="class-card-time">Time</p>
        </div>
    );
};

ClassCard.propTypes = {
    className: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default ClassCard;