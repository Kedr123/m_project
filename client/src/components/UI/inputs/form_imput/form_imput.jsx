import React from 'react';
import classes from "./form_imput.module.css";

const FormImput = (props) => {

    return (
        <div className={classes.input}>
            <input {...props} className={ props.error? classes.inputError:classes.inputNoError} type={props.type}  placeholder={props.placeholder}/>
            <div className={props.error? classes.error:classes.noError}>{props.error?props.error:<br/>}</div>
        </div>
    );
};

export default FormImput;