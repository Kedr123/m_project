import React, {useState} from 'react';
import AvatarCircle from "../../avatars/circle/avatar_circle";
import Logo from "../../logo/logo";
import classes from "./header.module.css";
import DropList from "../../UI/drop_list/drop_list";
import HeaderNavigation from "../../header_navigation/header_navigation";



const Header = (props) => {

    console.log(props.user.avatar)

    return (
        <header className={classes.header}>
            <Logo />
            <HeaderNavigation {...props} />
        </header>
    );
};

export default Header;