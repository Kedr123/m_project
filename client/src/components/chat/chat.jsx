import React, {useMemo} from 'react';
import classes from "./chat.module.css";
import ChatHeader from "./chatHeader/chatHeader";
import ChatBody from "./chatBody/chatBody";
import ChatForm from "./chatForm/chatForm";

const Chat = (props) => {
    useMemo(()=>{

    })
    return (
        <div className={classes.chat}>
            <ChatHeader img={props.img}/>
            <ChatBody />
            <ChatForm />
        </div>
    );
};

export default Chat;