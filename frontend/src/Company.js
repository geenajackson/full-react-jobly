import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import UserContext from "./userContext";


function Company({ name, description, numEmployees, logoUrl }) {
    const user = useContext(UserContext)

    if (!user) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <h2>{name}</h2>
            {logoUrl ? <img src={logoUrl} alt={name}></img> : ""}
            <p>{description}</p>
            <p>Number of Employees: {numEmployees}</p>
        </div>
    )
}

export default Company;