import React, {useState} from 'react';
import classes from "./circleImg.module.css";
import louder_img from "./../../../img/louders/louder.gif";

const CircleImg = (props) => {

    const [louder, setLouder] = useState(true);

    return (
        <div className={classes.circleImg}>
            <img src={props.src} className={louder ? classes.Non : classes.block} alt="" onLoad={() => setLouder(false)}/>
            {
                louder ? <img src={louder_img} alt=""/> : ""
            }
        </div>
    );
};

export default CircleImg;