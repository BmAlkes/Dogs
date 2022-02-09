import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhoto from "./FeedPhoto";

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);

    useEffect(() => {
        function inifitScrool() {
            if (infinite) {
                let wait = false;
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                if (scroll > height * 0.75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }
        window.addEventListener("wheel", inifitScrool);
        window.addEventListener("scroll", inifitScrool);
        return () => {
            window.removeEventListener("wheel", inifitScrool);
            window.removeEventListener("scroll", inifitScrool);
        };
    }, [infinite]);

    return (
        <div>
            {modalPhoto && (
                <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
            )}
            {pages.map((page) => (
                <FeedPhoto
                    user={user}
                    key={page}
                    page={page}
                    setModalPhoto={setModalPhoto}
                    setInfinite={setInfinite}
                />
            ))}
        </div>
    );
};

export default Feed;
