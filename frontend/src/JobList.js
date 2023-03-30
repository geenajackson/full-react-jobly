import React, { useState, useEffect } from "react";

import JoblyApi from "./api"
import SearchBar from "./SearchBar";
import Job from "./Job"

function JobList() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

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