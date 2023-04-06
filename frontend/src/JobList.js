import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import UserContext from "./userContext";
import JoblyApi from "./api"
import SearchBar from "./SearchBar";
import Job from "./Job"
import ApplicationsContext from "./ApplicationsContext";

function JobList() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const user = useContext(UserContext)
    const applications = useContext(ApplicationsContext)

    async function fetchData(query = undefined) {
        setIsLoading(true);
        async function getJobs() {
            let jobs = await JoblyApi.getJobs(query);
            setJobs(jobs);
            setIsLoading(false);
        };
        getJobs();
    };

    async function applyUser(jobId) {
        try {
            let res = await JoblyApi.applyUser(user.username, jobId);
            console.log(res)
            window.location.reload();

        }
        catch (e) {
            return e;
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    if (!user) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <SearchBar fetchData={fetchData} />
            {jobs.map(job => (
                <Job
                    key={job.id}
                    jobId={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                    applyUser={applyUser}
                    applications={applications}
                ></Job>
            ))}
        </div>
    )
}

export default JobList;