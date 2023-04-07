import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem, Button } from "reactstrap"

import "./Card.css"


function Job({ jobId, title, salary, equity, companyName, applyUser, applications }) {
    const history = useHistory();
    async function handleSubmit(evt) {
        evt.preventDefault();
        let res = await applyUser(jobId);
        console.log(res);
        history.push("/jobs")
    }

    return (
        <Card color="light" className="Card">
            <CardBody>
                <CardTitle tag="h3">{title}</CardTitle>
                <ListGroup>
                    <ListGroupItem>Company: {companyName}</ListGroupItem>
                    <ListGroupItem>Salary: {salary}</ListGroupItem>
                    {equity ? <ListGroupItem>Equity: {equity}</ListGroupItem> : ""}
                </ListGroup>
                {applications.includes(jobId) ? <Button disabled>Applied!</Button> :
                    <Button color="primary" onClick={handleSubmit}>Apply!</Button>}
            </CardBody>
        </Card>
    )
}

export default Job;