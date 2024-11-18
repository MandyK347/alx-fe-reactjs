// src/components/RegistrationForm
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const [errors, setErrors] = usesState({});

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setpassword(e.target.value);

    const validate = () => {
        const errors = {};
        if (!username) errors.username = 'Username is required';
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log({ username, email, password });

        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {errors.Password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
