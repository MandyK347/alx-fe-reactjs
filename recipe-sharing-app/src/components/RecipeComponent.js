// src/components/RecipeComponent.js
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeComponent = () => {
    const { recipe, updateRecipe, deletedRecipe } = useRecipeStore();

    const handleUpdate = (id, recipe) => {
        updateRecipe(id, recipe);
    };

    const handleDelete = (id) => {
        deletedRecipe(id);
    };

    return (
        <div>
            {recipe.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <button onClick={() => handleUpdate(recipe.id, { ...recipe, name: 'Updated'})}>
                        Update
                    </button>
                    <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default RecipeComponent;