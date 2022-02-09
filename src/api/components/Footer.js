import React from "react";
import styles from "./Footer.module.css";

import { ReactComponent as Dog } from "../../Assets/dogs-footer.svg";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Dog />
            <p>Dogs. all rights reserved</p>
        </footer>
    );
};

export default Footer;
