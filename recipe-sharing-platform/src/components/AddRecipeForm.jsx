// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = ({ addRecipe }) => {
  // Form state for each field
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  
  // Validation state
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required');
      return;
    }

    const ingredientsList = ingredients.split('\n').map(item => item.trim()).filter(item => item);
    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    // Clear error and pass the form data
    setError('');
    addRecipe({ title, ingredients: ingredientsList, instructions: instructions.split('\n') });
    
    // Reset form
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            placeholder="Enter ingredients (separate each ingredient with a new line)"
          />
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-lg font-medium mb-2">Preparation Steps</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            placeholder="Enter preparation steps"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
