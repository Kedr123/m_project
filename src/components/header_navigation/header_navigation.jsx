import React from 'react';
import AvatarCircle from "../avatars/circle/avatar_circle";
import DropList from "../UI/drop_list/drop_list";
import classes from "./header_navigation.module.css";

const HeaderNavigation = (props) => {
    return (
        <div className={classes.headerNavigation}>
            <AvatarCircle src={props.user.avatar}/>
            <DropList />
        </div>
    );
};

export default HeaderNavigation;