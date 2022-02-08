import React from 'react';
import classes from "./louder.module.css";
const Louder = () => {
    return (
        <div className={classes.louder}>
            <div className={classes.circle1} ></div>
            <div className={classes.circle2} ></div>
            <div className={classes.circle3} ></div>
        </div>
    );
};

export default Louder;