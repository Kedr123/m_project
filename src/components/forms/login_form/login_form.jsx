import React from 'react';
import classes from "./login_form.module.css";
import FormImput from "../../UI/form_imput/form_imput";
import FormButton from "../../UI/form_button/form_button";
import RussoOneText from "../../fonts/ russo_one_text/RussoOneText";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <form className={classes.form}>
            <RussoOneText color={"rgba(117, 106, 160, 1)"}>
                Авторизация
            </RussoOneText>
            <FormImput placeholder="E-mail" type={"email"}/>
            <br/>
            <FormImput placeholder="Пароль"/>
            <div className={classes.form_footer}>
                <FormButton>
                    Отправить
                </FormButton>
                <Link to='/auth'>login</Link>
            </div>

        </form>
    );
};

export default LoginForm;