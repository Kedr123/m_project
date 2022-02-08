import React from 'react';
import classes from "./chatHeader.module.css";
import CircleImg from "../../UI/circleImg/circleImg";

const ChatHeader = (props) => {
    return (
        <div className={classes.chatHeader}>
            <CircleImg src={props.img} />

            
        </div>
    );
};

export default ChatHeader;