import React from 'react';
import classes from "./auth_form.module.css";
import FormImput from "../../UI/form_imput/form_imput";
import FormButton from "../../UI/form_button/form_button";
import RussoOneText from "../../fonts/ russo_one_text/RussoOneText";
import ImgDonload from "../../UI/img_donload/ImgDonload";
import FormInputDate from "../../UI/form_input_date/form_input_date";
import {Link} from "react-router-dom";

const AuthForm = () => {
    return (
        <form className={classes.form}>
            <RussoOneText color={"rgba(117, 106, 160, 1)"}>
                Регистрация
            </RussoOneText>
            <div className={classes.groupFlex}>
                <div className={classes.groupFlexColomn}>
                    <FormImput placeholder="Имя"/>
                    <FormImput placeholder="Фамилия"/>
                    <FormInputDate placeholder="Дата рождения"/>
                </div>
                <ImgDonload/>
            </div>
            <br/>
            <FormImput placeholder="E-mail" type={"email"}/>
            <br/>
            <FormImput placeholder="Пароль"/>
            <FormImput placeholder="Повторите пароль"/>
            <div className={classes.form_footer}>
                <FormButton>
                    Отправить
                </FormButton>
                <Link to='/auth'>login</Link>
            </div>

        </form>
    );
};

export default AuthForm;