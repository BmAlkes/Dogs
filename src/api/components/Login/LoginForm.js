import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Input from "../Forms/Input.js";
import Button from "../Forms/Button.js";
import { UserContext } from "../../../UserContext";
import Error from "../Helpers/Error";

import styles from "./LoginForm.module.css";
import stylesBtn from "../../components/Forms/Button.module.css";

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
        <section className="animeLeft">
            <h1 className="title">Login</h1>
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
                <Error error={error} />
            </form>
            <Link className={styles.perdeu} to="/login/lost">
                Forgot password?
            </Link>
            <div className={styles.signin}>
                <h2 className={styles.subtitle}>Register</h2>
                <p>Don't have an account yet ? register on the site</p>
                <Link className={stylesBtn.button} to="/login/create">
                    Sign in
                </Link>
            </div>
        </section>
    );
}

export default LoginForm;
