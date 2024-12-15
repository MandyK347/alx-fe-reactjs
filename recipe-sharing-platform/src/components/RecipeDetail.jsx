import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetail() {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
            const foundRecipe = data.find((recipe) => recipe.id === id);
            setRecipe(foundRecipe);
        });
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                {/* Recipe Image with shadow */}
                <img src={recipe.image} alt={recipe.name} className="w-full h-auto rounded-lg mb-4 shadow-md" />
                {/* Recipe Title */}
                <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
                {/* Ingredients Section */}
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-dics pl-5 mb-6">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-lg">{ingredient}</li>
                    ))}
                </ul>
                {/* Cooking Instruction Section */}
                <h2 className="text-xl font-semibold mb-2">Cooking Instrations</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    {recipe.instructions.map((step, index) => (
                        <li key={index} className="text-lg">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default RecipeDetail;