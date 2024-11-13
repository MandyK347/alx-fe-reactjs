// src/components/recipeStore.js
import create from 'zustand'

const useRecipeStore = create((set) => ({
    recipe:[],
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    
    deleteRecipe: (id) => set((state) => ({
        recipe: state.recipe.filter((recipe) => recipe.id !== id)
    })),

    updateRecipe: (id, updatedRecipe) => set((state) => ({
        recipe: state.recipe.map((recipe) =>
            recipe.id === id ? updatedRecipe : recipe
        ),
    })),
}));


export default useRecipeStore;