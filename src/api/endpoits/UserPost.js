import React, { useState } from "react";

const UserPost = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, email, password });

        fetch(`https://dogsapi.origamid.dev/json/api/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        })
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
            <input
                type="text"
                value={username}
                placeholder="username"
                onChange={({ target }) => setUserName(target.value)}
            />
            <input
                type="text"
                value={email}
                placeholder="email"
                onChange={({ target }) => setEmail(target.value)}
            />
            <input
                type="text"
                value={password}
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
            />

            <button>Send</button>
        </form>
    );
};

export default UserPost;
