import React, {useEffect, useState} from "react";
import UserService from "../API/UserService";
import Header from "../components/semantics/header/header";
import Main from "../components/semantics/main/main";


function MyPage() {

    const [user, setUser] = useState({});

    useEffect(() => {
        getUser()
    }, []);

    async function getUser() {
        setUser(await UserService.show());
    }

    return (
        <div>
            <Header user={user}/>
            <Main user={user}/>
        </div>
    );
}

export default MyPage;
