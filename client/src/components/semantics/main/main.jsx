import React from 'react';
import classes from "./main.module.css";
import AvatarSquare from "../../avatars/square/avatar_square";


const Main = () => {
    return (
        <main className={classes.main}>
            <AvatarSquare />
        </main>
    );
};

export default Main;