import React from 'react';
import './Contents.css'

const Contents = () => {
    return (
        <section>
            <h1 className='primary-heading'>Welcome to <br /><span className='highlight-heading'>Globetech</span></h1>
            <p className='description'>
                We are committed to deliver <span className='highlight-text'>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.
            </p>
            <div className='btn-container'>
                <button className='btn support-btn'>Support us</button>
                <button className='btn mission-btn'>Our Mission</button>
            </div>
        </section>
    );
};

export default Contents;