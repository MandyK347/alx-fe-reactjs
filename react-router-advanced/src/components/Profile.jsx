// src/components/Profile.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    return (
        <div>
            <h1>Welcome to your Profile</h1>
            <Routes>
                <Route index element={<ProfileDetails />} />
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
};

export default Profile;
