import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import useFetch from "../../../hooks/useFetch";
import FeedPhotoItem from "./FeedPhotoItem";
import styles from "./FeedPhotos.module.css";

const FeedPhoto = ({ page, user, setModalPhoto, setInfinite }) => {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhoto() {
            const total = 3;
            const { url, options } = PHOTOS_GET({ page, total, user });
            const { response, json } = await request(url, options);
            if (response && response.ok && json.length < total) {
                setInfinite(false);
            }
        }
        fetchPhoto();
    }, [request, user, page]);

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
