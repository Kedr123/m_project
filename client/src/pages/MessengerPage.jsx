import React, {useState} from 'react';
import ItemChat from "../components/items_components/item_chats/ItemChat";
import "./page.css"
import ListChat from "../components/list_components/list_chat/ListChat";
import {MessengerContext} from "../context";
import ChatHeader from "../components/chat/chatHeader/chatHeader";
import Chat from "../components/chat/chat";

const MessengerPage = () => {
    const [chatId,setChatId]=useState('');

    const [chats, setChats] = useState([
        {id: "1", img: "https://i11.fotocdn.net/s121/812174e17c001a41/public_pin_l/2764195349.jpg", name: "Без мата", time: "18:00", user: "Александр", message: "Я в армие",},
        {id: "2", img: "https://img-fotki.yandex.ru/get/5707/238977675.53/0_fb236_79198b89_orig.jpg", name: "ghj", time: "12:00", user: "Андрей", message: "Караул!!!",},
        {id: "3", img: "https://e7.pngegg.com/pngimages/689/112/png-clipart-kantai-collection-anime-catgirl-manga-moe-kawai-comics-cg-artwork.png", name: "bnj", time: "12:00", user: "Андрей", message: "Караул!!!",},
        {id: "4", img: "", name: "Ролы", time: "12:00", user: "Андрей", message: "Караул!!!",}
    ]);

    return (
        <MessengerContext.Provider value={{chatId,setChatId}}>
            <div className="background messenger">
                <ListChat chats={chats} />

                <div style={{marginLeft:"16px"}}>
                    <Chat img={chats[1].img} chatId={chatId}/>
                </div>

            </div>
        </MessengerContext.Provider>
    );
};

export default MessengerPage;