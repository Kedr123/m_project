import React from "react";
import "./App.css";
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import MyPage from "./pages/MyPage";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Header from "./components/semantics/header/header";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/mypage" element={<MyPage/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
