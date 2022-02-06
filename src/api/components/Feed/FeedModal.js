import React, { useEffect } from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../../hooks/useFetch";
import { PHOTO_GET } from "../../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, error, loading, request } = useFetch();
    useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
    }, [photo, request]);

    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            setModalPhoto(null);
        }
    };

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    );
};

export default FeedModal;
