import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import './ShuttleIcon.css'

const ShuttleIcon = () => {
    return (
        <div className='shuttle-icon'>
            <FontAwesomeIcon icon={faSpaceShuttle} />
        </div>
    );
};

export default ShuttleIcon;