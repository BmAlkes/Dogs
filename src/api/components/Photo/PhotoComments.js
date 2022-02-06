import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { UserContext } from "../../../UserContext";
import PhotoCommetsForm from "./PhotoCommetsForm";
import styles from "./PhotoComment.module.css";

const PhotoComments = (props) => {
    const { login } = useContext(UserContext);
    const [comment, setCommets] = useState(() => props.comments);

    return (
        <>
            <ul className={styles.comments}>
                {comment.map((comment) => (
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span> {comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {login && (
                <PhotoCommetsForm id={props.id} setCommets={setCommets} />
            )}
        </>
    );
};

export default PhotoComments;
