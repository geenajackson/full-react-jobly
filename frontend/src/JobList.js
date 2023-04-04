import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import UserContext from "./userContext";
import JoblyApi from "./api"
import SearchBar from "./SearchBar";
import Job from "./Job"

function JobList() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const user = useContext(UserContext)

    async function fetchData(query = undefined) {
        setIsLoading(true);
        async function getJobs() {
            let jobs = await JoblyApi.getJobs(query);
            setJobs(jobs);
            setIsLoading(false);
        };
        getJobs();
    };

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
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                ></Job>
            ))}
        </div>
    )
}

export default JobList;