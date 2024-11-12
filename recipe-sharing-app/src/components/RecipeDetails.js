import { useRecipeStore } from '../recipeStore'
import { useHistory } from '.react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipe.find(recipe => recipe.id === recipeId)
    );

    const history = useHistory();

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <div>
              {/* Pass recipe ID to EditRecipeForm */}
              <EditRecipeForm recipe={recipe} />
              {/* Pass recipe ID to DeleteRecipeButton */}
              <DeleteRecipeButton recipeId={recipe.id} />
           </div>
        </div>
    );
};

export default RecipeDetails;