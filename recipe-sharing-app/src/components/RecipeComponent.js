// src/components/RecipeComponent.js
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ requireId }) => {
    const recipe = useRecipeStore(state =>
        state.recipe.find(recipe => recipe.id === recipeId)
    );

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/*Render EditRecipeForm and DeleteRecipeButton here */}
        </div>
    );
};

export default RecipeComponent;