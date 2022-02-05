import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import useFetch from "../../../hooks/useFetch";
import FeedPhotoItem from "./FeedPhotoItem";
import styles from "./FeedPhotos.module.css";

const FeedPhoto = ({ setModalPhoto }) => {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhoto() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
            const { json } = await request(url, options);
            console.log(json);
        }
        fetchPhoto();
    }, [request]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <ul className={styles.feed}>
                {data.map((photo) => (
                    <FeedPhotoItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhoto;
