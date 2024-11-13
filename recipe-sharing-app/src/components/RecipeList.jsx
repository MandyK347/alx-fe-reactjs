// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filterdRecipes = useRecipeStore(state => state.filterdRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipe);

    // Trigger filtering when recipes or search term changes
    useEffect(() => {
        filterRecipes();
    }, [recipes, filterRecipes]);

    const displayRecipes = filterdRecipes.length > 0 ? filterRecipes : recipes;

    return (
        <div>
            {displayRecipes.length === 0 ? (
                <p>No recipes yet. Add some!</p>
            ) : (
              displayRecipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
              ))
            )}
        </div>
    );
};

export default RecipeList;