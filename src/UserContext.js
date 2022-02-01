import React, { useState, createContext, useEffect } from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const userLogout = React.useCallback(
        async function userLogout() {
            setData(null);
            setError(null);
            setLoading(false);
            setLogin(false);
            window.localStorage.removeItem("token");
            navigate("/login");
        },
        [navigate]
    );

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
        console.log(json);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = TOKEN_POST({ username, password });
            const tokenRes = await fetch(url, options);
            if (!tokenRes.ok)
                throw new Error(`Error: ${"User or Password invalid"}`);
            const { token } = await tokenRes.json();
            window.localStorage.setItem("token", token);
            await getUser(token);
            navigate("/account");
        } catch (error) {
            setError(error.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem("token");
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error("Token Invalid");
                    await getUser(token);
                    navigate("/account");
                } catch (e) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
            autoLogin();
        }
    }, [userLogout]);

    return (
        <UserContext.Provider
            value={{ userLogin, data, userLogout, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
