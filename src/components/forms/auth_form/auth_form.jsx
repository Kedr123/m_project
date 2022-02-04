import React, {useEffect, useMemo, useState} from 'react';
import classes from "./auth_form.module.css";
import FormImput from "../../UI/form_imput/form_imput";
import FormButton from "../../UI/form_button/form_button";
import RussoOneText from "../../fonts/ russo_one_text/RussoOneText";
import ImgDonload from "../../UI/img_donload/ImgDonload";
import FormInputDate from "../../UI/form_input_date/form_input_date";
import {Link} from "react-router-dom";
import UserService from "../../../API/UserService";
import Louder from "../../UI/louder/louder";
import Form from "../../UI/form/form";

const AuthForm = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        avatar: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [avatar, setAvatar] = useState('');
    const [request, setRequest] = useState(true);
    const [louder, setLouder] = useState(false);



    //Отправка формы регистрации на сервер
    async function requestForm(e) {
        e.preventDefault();
        setLouder(true);
        let response = await UserService.store(user, avatar);
        console.log(response)
        setError({...response.data.error})
        if (response.data.error.length == 0) setRequest(false);
        setLouder(false);
    }

    // Валидация формы
    function inputChange(e) {

        setUser({...user, [e.target.name]: e.target.value});

        if (e.target.value){

            setError({...error, [e.target.name]: ""});

            if (e.target.name == "password_confirmation") {

                if(user.password == e.target.value) setError({...error, [e.target.name]: ""});

                else setError({...error, [e.target.name]: "Пароли не совпадают!"});
            }
        }
        else setError({...error, [e.target.name]: "Этот пункт обязателен к заполнению"});

    }


    return (
        <div className={classes.contener}>
            {
                request
                    ? louder ?
                        <div className={classes.louder}>
                            <Louder/>
                        </div>
                        :
                        <Form>

                            <RussoOneText color={"rgba(117, 106, 160, 1)"}>
                                Регистрация
                            </RussoOneText>
                            <div className={classes.groupFlex}>
                                <div className={classes.groupFlexColomn}>
                                    <FormImput placeholder="Имя" value={user.firstName} error={error.firstName}
                                               name="firstName"
                                               onChange={e => inputChange(e)}/>

                                    <FormImput placeholder="Фамилия" value={user.lastName} error={error.lastName}
                                               name="lastName"
                                               onChange={e => inputChange(e)}/>

                                    <FormInputDate placeholder="Дата рождения" value={user.birthday} error={error.birthday}
                                                   name="birthday"
                                                   onChange={e => inputChange(e)}/>
                                </div>
                                <div className={classes.displayNon}>
                                    <ImgDonload upfile={setAvatar} error={error.avatar}/>
                                </div>
                            </div>
                            <br/>
                            <FormImput placeholder="E-mail" type={"email"} value={user.email} error={error.email}
                                       name="email"
                                       onChange={e => inputChange(e)}/>
                            <br/>
                            <FormImput placeholder="Пароль" type="password" value={user.password} error={error.password}
                                       name="password"
                                       onChange={e => inputChange(e)}/>

                            <FormImput placeholder="Повторите пароль" type="password" value={user.password_confirmation}
                                       name="password_confirmation"
                                       error={error.password_confirmation}
                                       onChange={e => inputChange(e)}/>

                            <div className={classes.form_footer}>
                                <FormButton  onClick={requestForm}>
                                    Отправить
                                </FormButton>
                                <Link to='/login'>login</Link>
                            </div>

                        </Form>
                    :
                    <Form className={classes.respons}>

                        <svg width="max(15vw,200px)" viewBox="0 0 403 403" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="201.5" cy="201.5" r="201.5" fill="#00AE26"/>
                            <rect x="82" y="181.606" width="27.0269" height="162.161" rx="8"
                                  transform="rotate(-39.5 82 181.606)" fill="white"/>
                            <rect x="310.52" y="128" width="27.0269" height="216.369" rx="13.5134"
                                  transform="rotate(40.5 310.52 128)" fill="white"/>
                        </svg>

                        {/*<RussoOneText color={"rgba(117, 106, 160, 1)"}>*/}
                        {/*    Регистрация прошла успешно!*/}
                        {/*</RussoOneText>*/}

                        <div className={classes.link}>
                            <Link to='/login'>
                                авторизоватся
                            </Link>
                        </div>

                    </Form>
            }
        </div>
    );
};

export default AuthForm;