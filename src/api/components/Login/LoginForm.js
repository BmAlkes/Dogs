import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input.js";
import Button from "../Forms/Button.js";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
            });
    };

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" />
                <Input label="Password" type="password" name="password" />
                <Button>Enter</Button>
            </form>
            <Link to="/login/create">Sign in</Link>
        </section>
    );
}

export default LoginForm;
