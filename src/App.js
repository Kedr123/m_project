import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyPage from "./pages/MyPage";
import Auth from "./pages/Auth";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/mypage" element={<MyPage />}/>
            <Route path="/auth" element={<Auth />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
