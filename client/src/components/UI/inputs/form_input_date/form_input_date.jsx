import React, {useRef} from 'react';
import classes from "./form_input_date.module.css";

const FormInputDate = (props) => {

    const ref = useRef();

    return (
        <div className={classes.input}>
            <input {...props} placeholder={props.placeholder}
                   ref={ref}
                   onFocus={() => (ref.current.type = "date")}
                   onBlur={() => (ref.current.type = "text")}
                   type="text"
                   className={ props.error? classes.inputError:classes.inputNoError}/>
            <div className={props.error ? classes.error : classes.noError}>{props.error ? props.error : <br/>}</div>
        </div>
    )
        ;
};

export default FormInputDate;