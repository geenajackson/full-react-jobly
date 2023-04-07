import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap"

import UserContext from "./userContext";
import "./Card.css"

function Company({ handle, name, description, numEmployees, logoUrl }) {
    const user = useContext(UserContext)
    let companyUrl = `companies/${handle}`;

    if (!user) {
        return <Redirect to="/" />
    }
    return (
        <Card color="light" className="Card">
            <CardBody>
                {logoUrl ? <img src={logoUrl} alt={name}></img> : ""}
                <CardTitle tag="h2">
                    <Link to={companyUrl}>{name}</Link>
                </CardTitle>
                <ListGroup>
                    <ListGroupItem>{description}</ListGroupItem>
                    <ListGroupItem>Number of Employees: {numEmployees}</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    )
}

export default Company;