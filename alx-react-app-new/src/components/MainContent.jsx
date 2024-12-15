function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

const MainContent = () => {
    return (
        <main style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center' }}>Welcome to My Cities</h2>
            <p>Explore the beautiful cities around the world.</p>
        </main>
    );
};

export default MainContent;