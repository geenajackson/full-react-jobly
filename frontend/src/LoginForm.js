import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function LoginForm({ loginUser }) {
    const INITIAL_STATE = { username: "", password: "" }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formData)
        let res = await loginUser(formData);

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
            <h1>Login Here!</h1>
            {errors ? <p>{errors}</p> : ""}
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
                <button type="submit">Login!</button>
            </form>
        </div>
    )
}

export default LoginForm;