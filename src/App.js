import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyPage from "./pages/MyPage";
import Auth from "./pages/Auth";
import Login from "./pages/Login";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/mypage" element={<MyPage />}/>
            <Route path="/auth" element={<Auth />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
