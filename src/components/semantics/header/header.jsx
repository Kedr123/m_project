import React, {useContext, useState} from 'react';
import AvatarCircle from "../../avatars/circle/avatar_circle";
import Logo from "../../logo/logo";
import classes from "./header.module.css";
import DropList from "../../UI/drop_list/drop_list";
import HeaderNavigation from "../../header_navigation/header_navigation";
import LinkAuth from "../../link_auth/link_auth";
import {AuthContext} from "../../../context";



const Header = () => {

    const {token} = useContext(AuthContext);



    return (
        <header className={classes.header}>
            <Logo />
            {token
            ?<HeaderNavigation />
            :<LinkAuth />
            }

        </header>
    );
};

export default Header;