// src/components/recipeStore.js
import create from 'zustand'

const useRecipeStore = create((set) => ({
    recipe:[],
    searchTerm: '',

    // Actions for managing recipes
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    
    deleteRecipe: (id) => set((state) => ({
        recipe: state.recipe.filter((recipe) => recipe.id !== id)
    })),

    updateRecipe: (id, updatedRecipe) => set((state) => ({
        recipe: state.recipe.map((recipe) =>
            recipe.id === id ? updatedRecipe : recipe
        ),
    })),

    setRecipes: (recipes) => set({ recipes}),

    // Search term and filtering logic
    setSearchTerm: (term) => set({ searchTerm: term }),

    // Filter recipes based on search term
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    }))
}));
    


export default useRecipeStore;