import React from 'react';
import classes from "./main.module.css";
import AvatarSquare from "../../avatars/square/avatar_square";


const Main = (props) => {
    return (
        <main className={classes.main}>
            <AvatarSquare src={props.user.avatar} />
        </main>
    );
};

export default Main;