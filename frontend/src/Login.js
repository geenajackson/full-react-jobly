import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <p>Signup or Login to utilize Jobly!</p>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default Login;