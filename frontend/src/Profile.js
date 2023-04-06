import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import ProfileForm from "./ProfileForm";
import UserContext from "./userContext";
import JoblyApi from "./api";

function Profile() {
    //no need to destructure with useContext
    const user = useContext(UserContext);

    async function updateUser(userData) {
        try {
            let res = await JoblyApi.updateUser(user.username, userData);
            console.log(res);
        }
        catch (e) {
            return e;
        }
    };

    if (!user) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <ProfileForm updateUser={updateUser} />
        </div>
    )
}

export default Profile;