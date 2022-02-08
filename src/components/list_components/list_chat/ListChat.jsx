import React, {useMemo, useState} from 'react';
import ItemChat from "../../items_components/item_chats/ItemChat";
import classes from "./ListChat.module.css";

const ListChat = ({chats}) => {

    const [search, setSearch] = useState("");

    const searchedChats = useMemo(()=>{
        return chats.filter(chats => chats.name.toLowerCase().includes(search.toLowerCase()))
    },[search, chats])



    return (
        <div className={classes.ListChat}>
            <div className={classes.search}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Поиск..." type="text"/>
                <div>

                </div>
            </div>

            <div className={classes.list}>
                {
                    searchedChats.length != 0?
                        searchedChats.map(searchedChats =>
                        <div className={classes.item} key={searchedChats.id}>
                            <ItemChat {...searchedChats} />
                        </div>
                    )
                        :"Чатов нет!"
                }

            </div>

        </div>
    );
};

export default ListChat;