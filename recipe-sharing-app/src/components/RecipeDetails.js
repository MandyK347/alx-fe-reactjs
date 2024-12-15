import { useRecipeStore } from '../recipeStore'
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipe.find((recipe) => recipe.id === parseInt(recipeId))
    );
    
    // If recipe doesn't exist, show a "not found" message
    if (!recipe) {
        return <p>Recipe not found!</p>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;