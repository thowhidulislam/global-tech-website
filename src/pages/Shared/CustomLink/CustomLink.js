import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link
                style={{ textDecoration: 'none', color: match ? '#D7F561' : '#8FE5FF' }}
                to={to}
                {...props}
            >{children}</Link>
        </div>
    );
};

export default CustomLink;