import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import UserContext from "../../../UserContext";

const User = () => {
    const { data } = useContext(UserContext);

    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/photo" element={<UserPhotoPost />} />
                <Route path="/statics" element={<UserStats />} />
            </Routes>
        </section>
    );
};

export default User;
