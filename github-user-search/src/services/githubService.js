import axios from 'axios';

const fetchUserData = async (username, location, minRepos, page) => {
    const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;
    const url = 'https://api.github.com/search/users?q=${query}&page=${page}&per_page=10'
    try {
        const response = await axios.get('https://api.github.com/user/${username}');
        return response.data; // Return the user data
    } catch (error) {
        throw new Error('User not found');
    }
};

export {fetchUserData }; 