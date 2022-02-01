import React, { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import style from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
    const [title, setTitle] = useState(" ");

    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
        if ("/account" === location.pathname) setTitle("My Account");
        if ("/account/statics" === location.pathname) setTitle("Statics");
        if ("/account/photo" === location.pathname) setTitle("Photo");
    }, [location]);

    return (
        <header className={style.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    );
};

export default UserHeader;
