import React from 'react';
import classes from "./form_imput.module.css";

const FormImput = (props) => {

    return (
        <input type={props.type} className={classes.input}  placeholder={props.placeholder}/>
    );
};

export default FormImput;