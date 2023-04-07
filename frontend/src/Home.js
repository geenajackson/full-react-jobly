import React, { useContext } from "react";
import UserContext from "./userContext";
import Login from "./Login";
import { Card, CardBody } from "reactstrap";


function Home() {
    const user = useContext(UserContext)

    return (
        <Card color="light">
            <CardBody>
                {user ? <p>Hello, {user.firstName}!</p> :
                    <Login />}
            </CardBody>
        </Card>
    )
}

export default Home;