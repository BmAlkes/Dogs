import React, { useState } from "react";

const TokenPost = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, password });

        fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                setToken(json.token);
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
                value={password}
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
            />

            <button>Send</button>
            <p style={{ wordBreak: "break-all" }}>{token}</p>
        </form>
    );
};

export default TokenPost;
