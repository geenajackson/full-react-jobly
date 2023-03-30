import React, { useState } from "react";


function SignupForm({ registerUser }) {
    const INITIAL_STATE = { username: "", password: "", firstName: "", lastName: "", email: "" }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log("submitted!")
        registerUser(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <div className="SignupForm">
            <h1>Register Here!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                ></input>
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                ></input>
                <label htmlFor="firstName">First Name: </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                ></input>
                <label htmlFor="lastName">Last Name: </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                ></input>
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                ></input>
                <button type="submit">Register!</button>
            </form>
        </div>
    )
}

export default SignupForm;