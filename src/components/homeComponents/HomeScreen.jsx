import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import {BiSearchAlt2} from "react-icons/bi";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipes();
  }, []);

//!Need to add a filter using the search input

  let recipesList = recipes.filter(recipe => {
    return recipe.recipe_name.toLowerCase().includes(search.toLowerCase())
  }).map(recipe => {
    return <RecipeCard key={recipe.recipe_id} recipe={recipe} />
  })

  return (
    <div>
      <AdBanner />
      <span className="search-container" >
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className="recipe-card-container">
        {recipesList}
      </div>
    </div>
  );
};

export default HomeScreen;
