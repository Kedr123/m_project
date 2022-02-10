import React from 'react';
import classes from "./chatHeader.module.css";
import CircleImg from "../../UI/circleImg/circleImg";

const ChatHeader = (props) => {
    return (
        <div className={classes.chatHeader}>
            <CircleImg src={props.img} />
            <div className={classes.name}>
                Название чата
            </div>

            <div className={classes.linkSettings}>
                настройки
            </div>
            
        </div>
    );
};

export default ChatHeader;