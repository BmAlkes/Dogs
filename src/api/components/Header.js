import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../UserContext";

const Header = () => {
    const { data, userLogout } = useContext(UserContext);
    return (
        <div className={styles.header}>
            <nav className={`${styles.nav} container `}>
                <Link className={styles.logo} to="/" arial-label="Dogs - Home">
                    <Dogs />
                </Link>
                {data ? (
                    <Link className={styles.login} to="/account">
                        {data.nome}
                        <button onClick={userLogout}>Logout</button>
                    </Link>
                ) : (
                    <Link className={styles.login} to="/login">
                        Login / Create
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Header;
