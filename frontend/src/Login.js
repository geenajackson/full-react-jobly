import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Login() {
    return (
        <div>
            <p>Signup or Login to utilize Jobly!</p>
            <Button color="secondary"><Link to="/login">Login</Link></Button>
            {" "}
            <Button><Link to="/signup">Sign Up</Link></Button>
        </div>
    )
}

export default Login;