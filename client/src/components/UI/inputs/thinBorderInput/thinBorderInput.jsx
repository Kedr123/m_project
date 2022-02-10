import React from 'react';
import classes from "./thinBorderInput.module.css";

const ThinBorderInput = (props) => {
    return (
        <input {...props} className={classes.thinBorderInput}/>
    );
};

export default ThinBorderInput;