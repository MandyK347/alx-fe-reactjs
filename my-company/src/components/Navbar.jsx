// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navbarStyle = {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        textAlign: 'center'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        margin: '0 15px'
    };

    return (
        <nav style={navbarStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="services" style={linkStyle}>Services</Link>
            <Link to="contact" style={linkStyle}>Contact</Link>
        </nav>
    );
}

export default Navbar;