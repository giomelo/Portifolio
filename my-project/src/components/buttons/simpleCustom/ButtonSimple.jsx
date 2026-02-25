import React from 'react';
import { Link } from 'react-router-dom';
import '../../../variables/Colors.css';
import './ButtonSimple.css';

const ButtonSimple = ({ width, height, text, alt, href, to, borderRadius, ...rest }) => {
    
    const style = { width, height, borderRadius };

    if (to) {
        return (
            <Link to={to} className="btn-simple" style={style} alt={alt} {...rest}>
                {text}
            </Link>
        );
    }

    return (
        <a className="btn-simple" href={href} style={style} alt={alt} {...rest} >
            {text}
        </a>
    );
};

export default ButtonSimple;