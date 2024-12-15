// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import recipeData from '../data.json'; // Importing the mock data
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AddRecipeForm from './AddRecipeForm';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Load recipe data into state
        setRecipes(recipeData);
    }, []);

    // Function to add a new recipe
    const addRecipe = (newRecipe) => {
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center mb-8">Recipe Sharing Platform</h1>

            {/* Add Recipe Form */}
            <div className="mb-8">
                <AddRecipeForm addRecipe={addRecipe} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
                        {/* Corrected Link with backticks for string interpolation */}
                        <Link to={`/recipe/${recipe.id}`} className="block">
                            <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800">{recipe.title}</h2>
                                <p className="text-gray-600">{recipe.summary}</p>
                                <a href="#" className="text-indigo-600 hover:underline mt-2 block">View Recipe</a>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
