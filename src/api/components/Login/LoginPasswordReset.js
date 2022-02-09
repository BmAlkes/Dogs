import React, { useEffect, useState } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PASSWORD_Reset } from "../../../api";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
    const [login, setLogin] = useState(" ");
    const [key, setKey] = useState(" ");

    const password = useForm();
    const { error, loading, request } = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("key");
        const login = params.get("login");

        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = PASSWORD_Reset({
            login,
            key,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.status === 200) {
            navigate("/login");
        }
    }

    return (
        <div>
            <h1 className="title">Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="new password"
                    type="password"
                    name="new password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Reset</Button>
                ) : (
                    <Button>Reset</Button>
                )}
            </form>
        </div>
    );
};

export default LoginPasswordReset;
