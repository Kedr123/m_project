import React, {useState} from 'react';
import AvatarCircle from "../../avatars/circle/avatar_circle";
import Logo from "../../logo/logo";
import classes from "./header.module.css";
import DropList from "../../UI/drop_list/drop_list";
import HeaderNavigation from "../../header_navigation/header_navigation";
import LinkAuth from "../../link_auth/link_auth";



const Header = (props) => {

    // Иметация авторизации (удалить после реализации проверки через сервер)
    const [test, setTest]=useState(false);

    return (
        <header className={classes.header}>
            <Logo />
            {test
            ?<HeaderNavigation {...props} />
            :<LinkAuth />
            }

        </header>
    );
};

export default Header;