import React, { useContext } from "react";

import UserContext from "./userContext";

function Profile() {
    const { user } = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <h1>Hello!</h1>
            <p>{user}</p>
        </div>
    )
}

export default Profile;