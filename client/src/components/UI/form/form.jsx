import React from 'react';
import classes from "./form.module.css";

const Form = (props) => {
    return (
        <form className={classes.form}>
            {props.children}
        </form>
    );
};

export default Form;