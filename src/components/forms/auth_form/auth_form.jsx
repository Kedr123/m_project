import React, {useState} from 'react';
import classes from "./auth_form.module.css";
import FormImput from "../../UI/form_imput/form_imput";
import FormButton from "../../UI/form_button/form_button";
import RussoOneText from "../../fonts/ russo_one_text/RussoOneText";
import ImgDonload from "../../UI/img_donload/ImgDonload";
import FormInputDate from "../../UI/form_input_date/form_input_date";
import {Link} from "react-router-dom";
import UserService from "../../../API/UserService";
import Louder from "../../UI/louder/louder";

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


    async function test(e) {
        e.preventDefault();
        setLouder(true);
        let response = await UserService.store(user, avatar);
        console.log(response)
        setError({...response.data.error})
        if (response.data.error.length == 0) setRequest(false);
        setLouder(false);
    }


    return (
        <div>
            {
                request
                    ? louder ?
                        <form className={classes.form}>
                    <Louder/>
                        </form>
                    :
                    <form className={classes.form}>

                        <RussoOneText color={"rgba(117, 106, 160, 1)"}>
                            Регистрация
                        </RussoOneText>
                        <div className={classes.groupFlex}>
                            <div className={classes.groupFlexColomn}>
                                <FormImput placeholder="Имя" value={user.firstName} error={error.firstName}
                                           onChange={e => setUser({...user, firstName: e.target.value})}/>

                                <FormImput placeholder="Фамилия" value={user.lastName} error={error.lastName}
                                           onChange={e => setUser({...user, lastName: e.target.value})}/>

                                <FormInputDate placeholder="Дата рождения" value={user.birthday} error={error.birthday}
                                               onChange={e => setUser({...user, birthday: e.target.value})}/>
                            </div>
                            <ImgDonload upfile={setAvatar} error={error.avatar}/>

                        </div>
                        <br/>
                        <FormImput placeholder="E-mail" type={"email"} value={user.email} error={error.email}
                                   onChange={e => setUser({...user, email: e.target.value})}/>
                        <br/>
                        <FormImput placeholder="Пароль" type="password" value={user.password} error={error.password}
                                   onChange={e => setUser({...user, password: e.target.value})}/>

                        <FormImput placeholder="Повторите пароль" type="password" value={user.password_confirmation}
                                   error={error.password_confirmation}
                                   onChange={e => setUser({...user, password_confirmation: e.target.value})}/>

                        <div className={classes.form_footer}>
                            <FormButton onClick={test}>
                                Отправить
                            </FormButton>
                            <Link to='/login'>login</Link>
                        </div>

                    </form>
                    :
                    <form className={classes.form}>


                        <div className={classes.form_footer}>
                            <FormButton onClick={test}>
                                Отправить
                            </FormButton>
                            <Link to='/login'>login</Link>
                        </div>

                    </form>
            }
        </div>
    );
};

export default AuthForm;