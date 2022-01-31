import React, { useContext } from "react";
import { USER_POST } from "../../../api";
import useForm from "../../../hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from "../../../UserContext";

const LoginCreate = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm();

    const { userLogin } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const response = await fetch(url, options);
        console.log(response);
        if (response.ok) {
            console.log(response.ok);
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Register</h1>
            <form onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    {...password}
                />
                <Button>Register</Button>
            </form>
        </section>
    );
};

export default LoginCreate;
