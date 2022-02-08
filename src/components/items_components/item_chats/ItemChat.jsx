import React, {useContext, useState} from 'react';
import classes from "./ItemChat.module.css";
import louder_img from "./../../../img/louders/louder.gif"
import {MessengerContext} from "../../../context";
import CircleImg from "../../UI/circleImg/circleImg";

const ItemChat = (props) => {
    const {chatId, setChatId} = useContext(MessengerContext);
    const [img, setImg] = useState(false);
    const [louder, setLouder] = useState(true);




    return (
        <div className={ chatId==props.id? classes.ItemChatActive:classes.ItemChat} id={props.id} onClick={() => setChatId(props.id) }>

            <CircleImg src={props.img} />

            <div className={classes.text}>
                <div className={classes.group}>
                    <div className={classes.name}> {props.name}</div>
                    <div className={classes.date}> {props.time}</div>
                </div>
                <div className={classes.lastMessage}>{props.user}: {props.message}</div>
            </div>

        </div>
    );
};

export default ItemChat;