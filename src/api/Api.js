import React from "react";
import PhotoGet from "./endpoits/PhotoGet";
import PhotoPost from "./endpoits/PhotoPost";
import TokenPost from "./endpoits/TokenPost";
import UserPost from "./endpoits/UserPost";

const Api = () => {
    return (
        <div>
            <h2>User Post</h2>
            <UserPost />
            <h2>TokenPost</h2>
            <TokenPost />
            <h2>Photo Post</h2>
            <PhotoPost />
            <h2>Get Photo</h2>
            <PhotoGet />
        </div>
    );
};

export default Api;
