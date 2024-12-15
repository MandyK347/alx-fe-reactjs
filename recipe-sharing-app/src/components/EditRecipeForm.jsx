import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] =useState(recipe.description);

    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updateRecipe = {
            id: recipe.id,
            title: event.target.title.value,
            description: event.target.description.value,
        };
        updateRecipe(recipe.id, updatedRecipe);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                  type="text" name="title" defaultValue={recipe.title} />
            </label>
            <br />
            <label>
                Description:
                <textarea name="description" defaultValue={recipe.description} />
            </label>
            <br />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;