import React from 'react';
import classes from "./avatar_square.module.css";

const AvatarSquare = (props) => {
    console.log(props)
    return (
        <div className={classes.avatar}>
            <img {...props} alt="Загрузка"/>
        </div>
    );
};

export default AvatarSquare;