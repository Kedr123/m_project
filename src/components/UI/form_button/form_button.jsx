import React from 'react';
import classes from "./form_button.module.css";

const FormButton = (props) => {
    return (
        <button {...props} className={classes.button}>

        </button>
    );
};

export default FormButton;