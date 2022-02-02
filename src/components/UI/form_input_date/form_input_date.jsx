import React, {useRef} from 'react';
import classes from "./form_input_date.module.css";

const FormInputDate = (props) => {

    const ref = useRef();

    return (
        <input placeholder={props.placeholder} ref={ref}  onFocus={() => (ref.current.type = "date")} onBlur={() => (ref.current.type = "text")} type="text" className={classes.input}/>
    );
};

export default FormInputDate;