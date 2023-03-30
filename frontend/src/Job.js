import React from "react";

function Job({ title, salary, equity, companyName }) {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>Company: {companyName}</li>
                <li>Salary: {salary}</li>
                {equity ? <li>Equity: {equity}</li> : ""}
            </ul>
        </div>
    )
}

export default Job;