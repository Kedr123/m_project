import React from 'react';
import Header from "../components/semantics/header/header";
import AuthForm from "../components/forms/auth_form/auth_form";
import './page.css'

const Auth = () => {
    return (
        <div className="auth">
            <AuthForm/>
        </div>
    );
};

export default Auth;