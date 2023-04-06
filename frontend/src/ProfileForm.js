import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import UserContext from "./userContext";


function ProfileForm({ updateUser }) {
    const user = useContext(UserContext);
    const INITIAL_STATE = { firstName: user.firstName, lastName: user.lastName, password: user.password, email: user.email }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formData)
        let res = await updateUser(formData);

        if (res) {
            setErrors(res.map(error => (
                <li key={error}>{error}</li>
            )));
            setFormData(INITIAL_STATE);
        }
        else history.push("/");
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <div className="LoginForm">
            <h1>Update profile for {user.username}</h1>
            {errors ? <p>{errors}</p> : ""}
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
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
                <button type="submit">Update!</button>
            </form>
        </div>
    )
}

export default ProfileForm;