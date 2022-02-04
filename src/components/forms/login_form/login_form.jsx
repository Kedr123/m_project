import React from 'react';
import classes from "./login_form.module.css";
import FormImput from "../../UI/form_imput/form_imput";
import FormButton from "../../UI/form_button/form_button";
import RussoOneText from "../../fonts/ russo_one_text/RussoOneText";
import {Link} from "react-router-dom";
import Form from "../../UI/form/form";

const LoginForm = () => {
    return (
        <Form>
            <RussoOneText color={"rgba(117, 106, 160, 1)"}>
                Авторизация
            </RussoOneText>
            <div className={classes.groupFlex}></div>
            <FormImput placeholder="E-mail" type={"email"}/>
            <br/>
            <FormImput placeholder="Пароль"/>

            <div className={classes.form_footer}>
                <FormButton>
                    Отправить
                </FormButton>
                <Link to='/auth'>registration</Link>
            </div>

        </Form>
    );
};

export default LoginForm;