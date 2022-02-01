import React, {useEffect} from 'react';
import classes from "./avatar_circle.module.css";
const AvatarCircle = (props) => {


    return (
        <div className={classes.avatarCircle}>
            <img {...props} alt="загрузка"/>
        </div>
    );
};

export default AvatarCircle;