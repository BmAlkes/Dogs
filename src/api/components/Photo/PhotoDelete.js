import React from "react";
import { PHOTO_DELETE } from "../../../api";
import style from "./PhotoDelete.module.css";
import useFetch from "../../../hooks/useFetch";

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    const handleClick = async () => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    };

    return (
        <>
            {loading ? (
                <button className={style.delete} disabled>
                    Deleting
                </button>
            ) : (
                <button className={style.delete} onClick={handleClick}>
                    Delete
                </button>
            )}
        </>
    );
};

export default PhotoDelete;
