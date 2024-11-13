import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom'; // Add this import

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate() //Use useNavigate

    const handleDelete = () => {
        deleteRecipe(recipeId);
        nagivate('/'); //Redirect to recipe list after deletion
    };

    return (
        <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;