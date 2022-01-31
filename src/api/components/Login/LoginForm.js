import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Input from "../Forms/Input.js";
import Button from "../Forms/Button.js";
import { UserContext } from "../../../UserContext";

function LoginForm() {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = useContext(UserContext);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    };

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" {...username} />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Loading</Button>
                ) : (
                    <Button>Enter</Button>
                )}

                {error && <p>{error}</p>}
            </form>
            <Link to="/login/create">Sign in</Link>
        </section>
    );
}

export default LoginForm;
