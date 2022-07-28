import React from 'react';
import ShuttleIcon from '../ShuttleIcon/ShuttleIcon';
import './ShuttleContainer.css'

const ShuttleContainer = () => {
    return (
        <section className='shuttle-container'>
            <div className='line-container'>
                <div className='line-1' />
                <div className='line-2' />
                <div className='line-3' />
            </div>
            <div><ShuttleIcon></ShuttleIcon></div>
        </section>
    );
};

export default ShuttleContainer;