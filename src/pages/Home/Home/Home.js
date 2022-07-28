import React from 'react';
import Contents from '../Contents/Contents';
import ShuttleContainer from '../ShuttleContainer/ShuttleContainer';
import './Home.css'

const Home = () => {
    return (
        <section className='home-page'>
            <div>
                <ShuttleContainer></ShuttleContainer>
                <Contents></Contents>
            </div>
            <div></div>
        </section>
    );
};

export default Home;