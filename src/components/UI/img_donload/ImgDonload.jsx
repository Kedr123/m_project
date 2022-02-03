import React, {useRef, useState} from 'react';
import classes from "./ImgDonload.module.css";

const ImgDonload = ({upfile, error}) => {

console.log(error)
    const [input, setInput] = useState('');


    const fileHandler = (event) => {
        if (event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                setInput(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
            upfile(event.target.files[0]);
        }
    };


    return (
        <div className={classes.inputeImg} >
            <label className={classes.imgDonload} style={error? {border: "2px solid #d00c0c"} : {border: "2px solid #756AA0"}}>
                {input ?
                    <img src={input}/>

                    :
                    <div>
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.9914 13.8665C21.8843 13.8665 20.9867 14.764 20.9867 15.8712V20.9905H4.01336V15.8712C4.01336 14.764 3.11578 13.8665 2.00863 13.8665C0.901489 13.8665 0.00390625 14.764 0.00390625 15.8712V22.9953C0.00390625 24.1024 0.901489 25 2.00863 25H22.9914C24.0986 25 24.9962 24.1024 24.9962 22.9953V15.8712C24.9962 14.764 24.0986 13.8665 22.9914 13.8665Z"
                                fill="black"/>
                            <path
                                d="M8.25747 9.0824L10.4953 6.84459V14.3139C10.4953 15.421 11.3929 16.3186 12.5 16.3186C13.6071 16.3186 14.5047 15.421 14.5047 14.3139V6.84452L16.7425 9.08233C17.1339 9.47379 17.647 9.66951 18.1601 9.66951C18.6731 9.66951 19.1862 9.47379 19.5776 9.08233C20.3605 8.29942 20.3605 7.03016 19.5776 6.24725L13.9175 0.587234C13.1347 -0.195745 11.8653 -0.195745 11.0825 0.587234L5.42239 6.24731C4.63948 7.03022 4.63948 8.29948 5.42239 9.0824C6.20523 9.86531 7.47462 9.86531 8.25747 9.0824Z"
                                fill="black"/>
                        </svg>

                        Загрузите аватарку</div>
                }

                <input  type="file" onChange={event => fileHandler(event)}/>
            </label>
            <div className={error? classes.error:classes.noError}>{error? error:<br/>}</div>
        </div>
    );
};

export default ImgDonload;