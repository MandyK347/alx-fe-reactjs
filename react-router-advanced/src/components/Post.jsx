// Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams(); //Retrives the dynamic segment from the URL

    return <h2>Blog Post: {id}</h2>;
};

export default Post;