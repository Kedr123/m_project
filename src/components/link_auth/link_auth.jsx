import React from 'react';
import classes from './link_auth.module.css'
import {Link} from "react-router-dom";

const LinkAuth = () => {
    return (
        <div className={classes.linkAuth}>
            <Link to='/login'>login</Link>
            <Link to='/auth'>registration</Link>
        </div>
    );
};

export default LinkAuth;