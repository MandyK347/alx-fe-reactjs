// src/ProfilePage.jsx
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function ProfilePage() {
    const { name, email} = UseContext(UserContext);

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default ProfilePage;