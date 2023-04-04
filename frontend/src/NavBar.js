import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import UserContext from "./userContext";

//put multiple NavLinks in an array inside of the conditional

function NavBar() {
    const user = useContext(UserContext);
    return (
        <div>
            <NavLink exact to="/">
                Jobly
            </NavLink>
            <NavLink exact to="/companies">
                Companies
            </NavLink>
            <NavLink exact to="/jobs">
                Jobs
            </NavLink>

            {user ?
                [<NavLink key="profile" exact to="/profile">
                    Profile
                </NavLink>,
                <NavLink key="logout" exact to="/logout">Logout</NavLink>] :
                [<NavLink key="login" exact to="/login">
                    Login
                </NavLink>,
                <NavLink key="signup" exact to="/signup">
                    Sign Up
                </NavLink>]
            }

        </div>
    )
}

export default NavBar;