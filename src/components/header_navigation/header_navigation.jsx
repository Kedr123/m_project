import React, {useContext} from 'react';
import AvatarCircle from "../avatars/circle/avatar_circle";
import DropList from "../UI/drop_list/drop_list";
import classes from "./header_navigation.module.css";
import {AuthContext} from "../../context";

const HeaderNavigation = () => {
    const {domen,user} = useContext(AuthContext);

    return (
        <div className={classes.headerNavigation}>
            <AvatarCircle src={domen+user.avatar}/>
            <DropList />
        </div>
    );
};

export default HeaderNavigation;