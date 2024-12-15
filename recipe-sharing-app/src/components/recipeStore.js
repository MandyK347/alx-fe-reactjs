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

    favorite: [],
    addFavorite: (recipeId) => set(state => ({ favorite: [...state.favorites, recipeId]
    })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),
    recommendations: [],
    generalRecommondations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),

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