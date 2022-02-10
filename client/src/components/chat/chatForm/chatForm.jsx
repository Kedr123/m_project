import React from 'react';
import classes from "./chatForm.module.css";
import ThinBorderInput from "../../UI/inputs/thinBorderInput/thinBorderInput";

const ChatForm = () => {
    return (
        <div className={classes.chatForm}>
            <form>

                <ThinBorderInput />

            </form>
        </div>
    );
};

export default ChatForm;