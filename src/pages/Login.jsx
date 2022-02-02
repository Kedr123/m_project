import React from 'react';
import Header from "../components/semantics/header/header";
import './page.css'
import LoginForm from "../components/forms/login_form/login_form";

const Login = () => {
    return (
        <div className="auth">
            <Header/>
            <LoginForm/>
        </div>
    );
};

export default Login;