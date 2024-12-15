import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import AddRecipeForm from '../AddRecipeForm';
import { useRecipeStore } from '../recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

const App = () =>{
  const recipe = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <div>
        <h2>All Recipes</h2>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
         </div>
        ))}
     </div>

     <FavoritesList />
     <RecommendationsList />
    </div>
  );
};

export default App;
