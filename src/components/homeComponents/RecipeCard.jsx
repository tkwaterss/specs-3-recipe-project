import React from "react";
import {Link} from 'react-router-dom'

const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe-card">
      <img src={recipe.image_url} alt={recipe.recipe_name} />
      <div className="recipe-card-name">
        <h3>{recipe.recipe_name}</h3>
        <Link to={`/recipe/${recipe.recipe_id}`} >
        <button>See More</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
