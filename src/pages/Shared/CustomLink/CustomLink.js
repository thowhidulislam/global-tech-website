import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';
import './CustomLink.css';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    const linkClassActive = match ? 'active' : '#8FE5FF'
    return (
        <div className={`nav-link ${linkClassActive}`}>
            <Link
                to={to}
                {...props}
            >{children}</Link>
        </div>
    );
};

export default CustomLink;