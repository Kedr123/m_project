import React, {useContext, useRef, useState} from 'react';
import classes from "./login_form.module.css";
import FormImput from "../../UI/inputs/form_imput/form_imput";
import FormButton from "../../UI/form_button/form_button";
import RussoOneText from "../../fonts/ russo_one_text/RussoOneText";
import {Link} from "react-router-dom";
import Form from "../../UI/form/form";
import UserService from "../../../API/UserService";
import {AuthContext} from "../../../context";

const LoginForm = () => {

    const [form,setForm]=useState({email:'',password:''})
    const [error,setError]=useState('')

    const {token, setToken, setUser} = useContext(AuthContext)

    async function requestForm(e){
        e.preventDefault();
        try {
            let response = await UserService.login(form);
            setError("");
            setToken(response.data.access_token);
            localStorage.setItem('token', response.data.access_token);
            let user = await UserService.me(response.data.access_token);
            setUser(user.data)
        }
        catch (e){
            if (e.message == "Request failed with status code 401") setError("Введены некоректные данные");
        }
    }

    return (
        <Form>
            <RussoOneText color={"rgba(117, 106, 160, 1)"}>
                Авторизация

            </RussoOneText>
            <div className={error? classes.error:classes.noError}>{error?error:""}</div>
            <div className={classes.groupFlex}></div>
            <FormImput placeholder="E-mail" type={"email"} value={form.email} onChange={e => setForm({...form, email:e.target.value})}/>
            <br/>
            <FormImput placeholder="Пароль" value={form.password} onChange={e => setForm({...form, password:e.target.value})}/>

            <div className={classes.form_footer}>
                <FormButton onClick={requestForm}>
                    Отправить
                </FormButton>
                <Link to='/auth'>registration</Link>
            </div>

        </Form>
    );
};

export default LoginForm;