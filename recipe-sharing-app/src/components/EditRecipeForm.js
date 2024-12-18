import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] =useState(recipe.description);

    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateRecipe = { ...recipe, title, description };
        updateRecipe(updatedRecipe);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Description:
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;