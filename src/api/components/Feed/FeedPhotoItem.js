import React from "react";
import styles from "./FeedPhotoItem.module.css";

function FeedPhotoItem({ photo, setModalPhoto }) {
    const handleClick = () => {
        setModalPhoto(photo);
    };
    return (
        <li className={`${styles.photo} animeLeft`} onClick={handleClick}>
            <img src={photo.src} alt={photo.title} />
            <span className={styles.watch}>{photo.acessos}</span>
        </li>
    );
}

export default FeedPhotoItem;
