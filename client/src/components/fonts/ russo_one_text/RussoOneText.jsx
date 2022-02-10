import React from 'react';
import classes from "./RussoOneText.module.css";

const RussoOneText = (props) => {


    const style = {
        fontSize : props.size,
        color : props.color

    }

    return (
        <div className={classes.font} style={style}>
            {props.children}
        </div>
    );
};

export default RussoOneText;