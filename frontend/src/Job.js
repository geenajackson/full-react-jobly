import React from "react";
import { useHistory } from "react-router-dom";

function Job({ jobId, title, salary, equity, companyName, applyUser, applications }) {
    const history = useHistory();
    async function handleSubmit(evt) {
        evt.preventDefault();
        let res = await applyUser(jobId);
        console.log(res);
        history.push("/jobs")
    }

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>Company: {companyName}</li>
                <li>Salary: {salary}</li>
                {equity ? <li>Equity: {equity}</li> : ""}
            </ul>
            {applications.includes(jobId) ? <button>Applied!</button> :
                <button onClick={handleSubmit}>Apply!</button>}
        </div>
    )
}

export default Job;