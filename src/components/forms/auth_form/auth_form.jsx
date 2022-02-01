import React from 'react';
import classes from "./auth_form.module.css";
import FormImput from "../../UI/form_imput/form_imput";
import FormButton from "../../UI/form_button/form_button";

const AuthForm = () => {
    return (
        <form className={classes.form}>
            <FormImput />
            <FormImput />
            <FormButton />
        </form>
    );
};

export default AuthForm;