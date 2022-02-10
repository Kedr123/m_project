import React, {useContext, useState} from 'react';
import classes from "./avatar_square.module.css";
import Louder from "../../UI/louders/louder/louder";
import LouderGif from "../../UI/louders/louderGif/louderGif";
import img from "./../../../img/louders/louder.gif"
import {AuthContext} from "../../../context";

const AvatarSquare = () => {

    const [louder, setLouder] = useState(true);
    const {domen, user} = useContext(AuthContext);

    return (

        <div className={classes.avatar}>

            <img src={domen+user.avatar} className={louder?classes.Non:classes.flex}  alt="Загрузка"
                 onLoad={() => setLouder(false)}
            />
            {
                louder?
                    <img src={img}  alt="Загрузка" />
                    :""
            }


        </div>
    );
};

export default AvatarSquare;