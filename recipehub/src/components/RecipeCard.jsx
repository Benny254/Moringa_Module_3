import React, { useState } from 'react';

function RecipeCard({ recipe }) {
  const [likes, setLikes] = useState(0);
  function handleLike() {
    setLikes(likes + 1);
  }
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  );
}
export default RecipeCard;