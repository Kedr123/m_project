import React, {useMemo} from 'react';
import classes from "./chat.module.css";
import ChatHeader from "./chatHeader/chatHeader";

const Chat = (props) => {
    useMemo(()=>{

    })
    return (
        <div className={classes.chat}>
            <ChatHeader img={props.img}/>
        </div>
    );
};

export default Chat;