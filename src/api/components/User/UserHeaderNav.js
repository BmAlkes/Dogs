import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import useMedia from "../../../hooks/useMedia";
import { ReactComponent as MyPictures } from "../../../Assets/feed.svg";
import { ReactComponent as Statics } from "../../../Assets/estatisticas.svg";
import { ReactComponent as Photos } from "../../../Assets/adicionar.svg";
import { ReactComponent as Logout } from "../../../Assets/sair.svg";
import style from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
    const { userLogout } = useContext(UserContext);
    const mobile = useMedia("(max-width: 40rem)");
    const [mobileMenu, setMobileMenu] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button
                    aria-aria-label="menu"
                    className={`${style.mobileButton} ${
                        mobileMenu && style.mobileButtonActive
                    }`}
                    onClick={() => {
                        setMobileMenu(!mobileMenu);
                    }}
                ></button>
            )}
            <nav
                className={`${mobile ? style.navMobile : style.nav} ${
                    mobileMenu && style.navMobileActive
                }`}
            >
                <NavLink to="/account">
                    <MyPictures />
                    {mobile && "My pictures"}
                </NavLink>
                <NavLink to="/account/statics">
                    <Statics />
                    {mobile && "Statics"}
                </NavLink>
                <NavLink to="/account/photo">
                    <Photos />
                    {mobile && "Photos"}
                </NavLink>
                <button onClick={userLogout}>
                    <Logout />
                    {mobile && "Logout"}
                </button>
            </nav>
        </>
    );
};

export default UserHeaderNav;
