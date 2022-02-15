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
import Louder from "./components/UI/louders/louder/louder";
import {CSSTransition} from "react-transition-group";
import MessengerPage from "./pages/MessengerPage";


function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [louder, setLouder] = useState(false);

    // useEffect(async () => {
    //     setLouder(true)
    //     let thisToken = localStorage.getItem('token');
    //
    //     if (thisToken) {
    //         let check = await UserService.check(thisToken)
    //         if (check.data) {
    //             setToken(thisToken);
    //             let newUser = await UserService.me(thisToken);
    //             setUser(newUser.data)
    //         } else {
    //             try {
    //                 let newToken = await UserService.refresh(thisToken);
    //                 setToken(newToken);
    //                 localStorage.setItem('token', newToken);
    //
    //             } catch (e) {
    //                 localStorage.removeItem('token');
    //                 setToken('');
    //             }
    //
    //
    //         }
    //     }
    //     setLouder(false)
    //
    // }, [])

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            user,
            setUser,
            domen : "http://m-project-api/public/storage/avatars/"
        }}>
            <BrowserRouter>
                {
                    token
                        ?<Header/>
                        :<Header/>

                }


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
                            <Route path="/messages" element={<MessengerPage/>} />
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
