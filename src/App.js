import React, {useEffect, useState} from "react";
import AvatarCircle from "./components/avatars/circle/avatar_circle";
import axios from "axios";
import UserService from "./API/UserService";
import Header from "./components/semantics/header/header";
import "./App.css";
import Main from "./components/semantics/main/main";

function App() {

    const [user, setUser]=useState({});

    useEffect(()=>{
       getUser()
    },[]);

   async function getUser(){
       setUser(await UserService.show());
   }
  return (
    <div className="App">
        <Header user={user}/>
        <Main user={user}/>
    </div>
  );
}

export default App;
