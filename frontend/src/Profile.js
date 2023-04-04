import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import UserContext from "./userContext";

function Profile() {
    //no need to destructure with useContext
    const user = useContext(UserContext);

    if (!user) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Hello!</h1>
            <p>{user.username}</p>
        </div>
    )
}

export default Profile;