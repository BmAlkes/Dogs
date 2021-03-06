import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import UserContext from "../../../UserContext";
import Notfound from "../Notfound";
import Head from "../Helpers/Head";

const User = () => {
    const { data } = useContext(UserContext);

    return (
        <section className="container">
            <UserHeader />
            <Head title={data.username} />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/photo" element={<UserPhotoPost />} />
                <Route path="/statics" element={<UserStats />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </section>
    );
};

export default User;
