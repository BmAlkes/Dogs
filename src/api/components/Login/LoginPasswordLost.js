import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PASSWORD_LOST } from "../../../api";
import Error from "../Helpers/Error";

const LoginPasswordLost = () => {
    const login = useForm();
    const { data, loading, error, request } = useFetch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { url, options } = PASSWORD_LOST({
            login: login.value,
            url: window.location.href.replace("lost", "reset"),
        });
        const { json } = await request(url, options);
        console.log(json);
    };

    return (
        <section>
            <h1 className="title">Lost Password</h1>
            {data ? (
                <p style={{ color: "#4c1" }}>{data}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email / User"
                        type="text"
                        name="email"
                        {...login}
                    />
                    {loading ? (
                        <Button disabled>sending</Button>
                    ) : (
                        <Button>Send Email</Button>
                    )}
                </form>
            )}
            <Error error={error} />
        </section>
    );
};

export default LoginPasswordLost;
