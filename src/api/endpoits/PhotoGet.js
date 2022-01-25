import React from "react";

const PhotoGet = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://dogsapi.origamid.dev/json/api/photo`)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                return json;
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>send</button>
        </form>
    );
};

export default PhotoGet;
