import React, { useState } from "react";
import { COMMENT_POST } from "../../../api";
import { ReactComponent as Send } from "../../../Assets/enviar.svg";
import Error from "../Helpers/Error";
import useFetch from "../../../hooks/useFetch";

const PhotoCommetsForm = ({ id, setCommets }) => {
    const { request, error } = useFetch();
    const [comment, setCommet] = useState(" ");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);
        if (response.ok) {
            setCommet("");
            setCommets((comments) => [...comments, json]);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                id="comment"
                name="coment"
                value={comment}
                placeholder="Comment"
                onChange={({ target }) => {
                    setCommet(target.value);
                }}
            ></textarea>
            <button>
                <Send />
            </button>
            <Error error={error} />
        </form>
    );
};

export default PhotoCommetsForm;
