import React, { useState } from 'react';
import { fetchUserData } from 'src/services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1); // for pageination

    const HandleChange = (e) => {
        const { name, value } = e.target.value;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    // Handle form submission to fetch data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Reset error message

        try {
            const data = await fetchUserData(username, location, minRepos, page);
            setUserData(data.items);
        } catch (err) {
            setError('Looks like we cant find the user'); // Set error message
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        setPage(page + 1);
        try {
            const data = await fetchUserData(username, location, minRepos, page + 1);
            setUserData([...userData,...data.items]);
        } catch (err) {
            setError('Error loading more users');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form onSubmit={haandleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={username}
                  onChange={handleChange}
                  placeholder="Enter GitHub username"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="location"
                  value={location}
                  onchange={handleChange}
                  placeholder="Location (optional)"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="minRepos"
                  value={minRepos}
                  onChange={handleChange}
                  placeholder="Minimum repositories (optional)"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button type="submit" className="w-fill bg-blue-500 text-white p-2 rounded-md">
                    Search
                </button>
            </form>

            {loading && <p className="text-center mt-4">Loading...</p>}

            {error && <p className="text-center mt-4 text-red-500">{error}</p>}

            {userData.length > 0 && (
                <div className="mt-4 space-y-4">
                    {userData.map((user) => (
                        <div key={user.id} className="flex items-center space-x-4 p-4 border border-gray-300 rounded-md">
                            <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
                            <div>
                            {/* Displaying the GitHub username (login) */}
                              <h3 className="text-xl font-semibold">{userData.login}</h3>
                              <img src={userData.avatar_url} alt="Avatar" style={{ width: '100px', height: '100px' }} />
                              <h2>{userData.name}</h2>
                              <p>{user.name || 'No Name Available'}</p>
                              <p>{user.location || 'No Location Available'}</p>
                              <p>Repos: {user.public_repos}</p>
                              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                            </div>
                        </div>
                    ))}

                    {/* Pagination */}
                    <button
                    onClick={handleLoadMore}
                    className="w-full gb-green-500 text-white p-2 rounded-md mt-4"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;
