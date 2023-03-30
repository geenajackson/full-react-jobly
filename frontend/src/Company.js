import React from "react";

function Company({ name, description, numEmployees, logoUrl }) {
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