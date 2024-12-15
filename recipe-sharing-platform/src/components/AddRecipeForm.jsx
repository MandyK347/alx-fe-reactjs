// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = ({ addRecipe }) => {
  // Form state for each field
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  
  // Validation errors state
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Validate title
    if (!title) {
      newErrors.title = 'Recipe title is required.';
    }

    // Validate ingredients (must be at least two)
    const ingredientsList = ingredients.split('\n').map(item => item.trim()).filter(item => item);
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients.';
    }

    // Validate instructions
    if (!instructions) {
      newErrors.instructions = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    
    // Return boolean indicating if the form is valid
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation before submitting
    if (validate()) {
      // No validation errors, pass the form data to parent component
      addRecipe({
        title,
        ingredients: ingredients.split('\n').map(item => item.trim()).filter(item => item),
        instructions: instructions.split('\n'),
      });
      
      // Reset the form after successful submission
      setTitle('');
      setIngredients('');
      setInstructions('');
      setErrors({}); // Clear errors
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      
      {/* Display Errors */}
      {Object.keys(errors).map((field) => (
        errors[field] && (
          <p key={field} className="text-red-500 mb-2">{errors[field]}</p>
        )
      ))}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.title ? 'border-red-500' : ''}`}
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
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.ingredients ? 'border-red-500' : ''}`}
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
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.instructions ? 'border-red-500' : ''}`}
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