// src/components/recipeStore.js
import create from 'zustand'

const useRecipeStore = create((set) => ({
    recipe:[],
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
            recipe: state.recipes.map((recipe) => (recipe.id === id ? updatedRecipe : recipe)),
        })),
    deleteRecipe: (id) =>
        set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
}));


export default useRecipeStore;