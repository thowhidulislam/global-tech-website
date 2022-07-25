import React from 'react';
import './Navbar.css'
import globeTechLogo from '../../../assets/images/globetech-logo.png'
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <section>
            <div className="navbar-container">
                <div>
                    <img src={globeTechLogo} alt="" className="globe-tech-logo" />
                </div>
                <div>
                    <ul className='features-list'>
                        <li><CustomLink to='/home'>Home</CustomLink></li>
                        <li><CustomLink to='/services'>Services</CustomLink></li>
                        <li><CustomLink to='/login'>Login</CustomLink></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;