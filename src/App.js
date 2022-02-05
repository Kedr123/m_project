import React, {useEffect, useMemo, useState} from "react";
import "./App.css";
import classes from "./App.module.css";
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import MyPage from "./pages/MyPage";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Header from "./components/semantics/header/header";
import {AuthContext} from "./context";
import UserService from "./API/UserService";
import Louder from "./components/UI/louder/louder";
import {CSSTransition} from "react-transition-group";


function App() {
    const [token, setToken] = useState('');
    const [louder, setLouder] = useState(false);

    useEffect(async () => {
        setLouder(true)
        let thisToken = localStorage.getItem('token');

        if (thisToken) {
            let check = await UserService.check(thisToken)
            if (check.data) {
                setToken(thisToken);
            } else {
                try {
                    setToken(await UserService.refresh(thisToken));
                    localStorage.setItem('token', token);

                } catch (e) {
                    localStorage.removeItem('token');
                }


            }
        }
        setLouder(false)

    }, [])

    return (
        <AuthContext.Provider value={{
            token,
            setToken
        }}>
            <BrowserRouter>
                <Header/>

                    <CSSTransition in={louder} classNames={{
                        enterActive: classes.louderEnter,
                        enterDone: classes.louderEnterActive,
                        exitActive: classes.louderExitActive,
                        exitDone: classes.louderExit
                    }}  timeout={600} unmountOnExit>
                        <div className={classes.louder}>
                            <Louder/>
                        </div>
                    </CSSTransition>



                {!louder?(token)
                        ?
                        <Routes>
                            <Route path="/mypage" element={<MyPage/>}/>
                            <Route path="*" element={<MyPage/>}/>
                        </Routes>
                        :
                        <Routes>
                            <Route path="/auth" element={<Auth/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="*" element={<Login/>}/>
                        </Routes>
                    :""
                }

            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
