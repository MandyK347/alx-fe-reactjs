function Footer() {
    return (
        <footer>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: ' 10px', position: 'absolute', width: '100%', bottom: '0' }}>
            <p>&copy; 2023 My Favorite Cities</p>
        </footer>
    );
};

export default Footer;