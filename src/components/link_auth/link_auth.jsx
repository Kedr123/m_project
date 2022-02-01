import React from 'react';
import classes from './link_auth.module.css'
import {Link} from "react-router-dom";

const LinkAuth = () => {
    return (
        <div className={classes.linkAuth}>
            <Link to='/auth'>login</Link>
            <Link to='/mypage'>registration</Link>
        </div>
    );
};

export default LinkAuth;