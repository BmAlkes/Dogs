import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import { UserContext } from "../../../UserContext";
import PhotoCommetsForm from "./PhotoCommetsForm";
import styles from "./PhotoComment.module.css";

const PhotoComments = (props) => {
    const { login } = useContext(UserContext);
    const commentsSection = useRef(null);
    const [comment, setCommets] = useState(() => props.comments);

    useEffect(() => {
        commentsSection.current.scrollTop =
            commentsSection.current.scrollHeight;
    }, [comment]);

    return (
        <>
            <ul ref={commentsSection} className={styles.comments}>
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
