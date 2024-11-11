// src/recipeStore.js
import create from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [], // Initial empty array for recipes
    addRecipes: (newRecipe) => set(state => ({
        recipes: [...state.recipes, newREcipe] // Add new recipe to the list
    })),
    setRecipes: (recipes) => set({ recipes }) // Set a new list of recipes
}));

export default RecipeStore;