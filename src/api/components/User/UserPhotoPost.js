import React, { useState, useEffect } from "react";
import styles from "./UserPhotoPost.module.css";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helpers/Error";
import { PHOT_POST } from "../../../api";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
    const nome = useForm();
    const peso = useForm();
    const idade = useForm();
    const [img, setImg] = useState({});
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) navigate("/account");
    }, [data, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.value);
        formData.append("peso", peso.value);
        formData.append("idade", idade.value);

        const token = window.localStorage.getItem("token");
        const { url, options } = PHOT_POST(formData, token);
        request(url, options);
    };

    const handleImgChange = ({ target }) => {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    };

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input label="Name" type="text" name="nome" {...nome} />
                <Input label="Weight" type="text" name="peso" {...peso} />
                <Input label="Age" type="text" name="idade" {...idade} />
                <input
                    className={styles.file}
                    type="file"
                    name="img"
                    id="img"
                    onChange={handleImgChange}
                />
                {loading ? (
                    <Button disabled>Loading</Button>
                ) : (
                    <Button>Send</Button>
                )}
                <Error error={error} />
            </form>
            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default UserPhotoPost;
