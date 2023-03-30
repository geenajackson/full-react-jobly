import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <Link to="/login/form">Login!</Link>
            <Link to="/signup">Sign Up!</Link>
        </div>
    )
}

export default Login;