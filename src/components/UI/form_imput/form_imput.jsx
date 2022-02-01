import React from 'react';
import classes from "./form_imput.module.css";

const FormImput = (props) => {
    return (
        <input {...props} className={classes.input} />
    );
};

export default FormImput;