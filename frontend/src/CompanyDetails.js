import React, { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap"


import UserContext from "./userContext";
import ApplicationsContext from "./ApplicationsContext";
import JoblyApi from "./api";
import Job from "./Job";


function CompanyDetails() {
    const [isLoading, setIsLoading] = useState(true);
    const [details, setDetails] = useState("");
    const [jobs, setJobs] = useState([]);

    let { company } = useParams();
    const user = useContext(UserContext)
    const applications = useContext(ApplicationsContext)


    async function fetchData() {
        setIsLoading(true);
        async function getCompany() {
            try {
                let res = await JoblyApi.getCompany(company);
                setDetails(res);
                setJobs(res.jobs)
                setIsLoading(false);
            }
            catch (e) {
                return e;
            }
        };
        getCompany();
    };

    useEffect(() => {
        fetchData();
    }, []);


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

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    if (!user) {
        return <Redirect to="/" />
    }
    return (
        <Card color="info">
            <CardBody>
                <CardTitle tag="h2">{details.name}</CardTitle>
                {details.logoUrl ? <img src={details.logoUrl} alt={details.name}></img> : ""}

                <ListGroup>
                    <ListGroupItem>{details.description}</ListGroupItem>
                    <ListGroupItem>Number of Employees: {details.numEmployees}</ListGroupItem></ListGroup>
                {jobs.map(job => (
                    <Job
                        key={job.id}
                        jobId={job.id}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                        companyName={details.name}
                        applyUser={applyUser}
                        applications={applications}>
                    </Job>
                ))}
            </CardBody>
        </Card>
    )
}

export default CompanyDetails;