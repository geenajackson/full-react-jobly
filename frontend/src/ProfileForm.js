import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
        <Form onSubmit={handleSubmit} className="LoginForm">
            <FormGroup><h1>Update profile for {user.username}</h1>
                {errors ? <p>{errors}</p> : ""}

                <Label htmlFor="firstName">First Name: </Label>
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                ></Input>
                <Label htmlFor="lastName">Last Name: </Label>
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                ></Input>
                <Label htmlFor="password">Password: </Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                ></Input>
                <Label htmlFor="email">Email: </Label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                ></Input>
                <Button type="submit">Update!</Button>
            </FormGroup>

        </Form>
    )
}

export default ProfileForm;