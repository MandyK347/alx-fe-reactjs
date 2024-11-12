// src/recipeStore.js
import create from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [], // Initial empty array for recipes

    // Action to add a new recipe
    addRecipes: (recipe) => set((state) => ({recipe: [...state.recipe, recipes] })),

    // Action to delete a recipe by ID
    deleteRecipe: (recipeId) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
    })),

    // Action to update a recipe by ID
    updatedRecipe: (updatedRecipe) => set((state) => ({
        recipe: state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    }))
}));

export default recipeStore;