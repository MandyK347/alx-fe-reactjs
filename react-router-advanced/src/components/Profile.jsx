// src/components/Profile.jsx
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
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