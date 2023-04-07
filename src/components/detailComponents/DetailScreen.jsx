import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageBanner from "./PageBanner";

const DetailScreen = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  let ingredients = () => recipe.ingredients.map((item) => {
    return <li key={item.ingredient_id}>{`${item.quantity} ${item.ingredient}`}</li>;
  })

  //TODO I want to clean this code up, I get an unknown error and the recipe updates twice per render
  console.log(recipe);
  //TODO also having issues with timeing, it seems that I need some kind of delay or re-render to get things to show properly. specically the background image.
  //*Might have fixed using the && conditional on all inserted dynamic values
  return (
    <>
      <PageBanner title={recipe.recipe_name} address={recipe.image_url} />
      <section className="recipe-details-container">
        <div className="ingredients-container">
          <div className="recipe-list">
            <h3 className="details-title">Recipe</h3>
            <ul className="details-lists">
              <li>Prep Time: {recipe.prep_time}</li>
              <li>Cook Time: {recipe.cook_time}</li>
              <li>Serves: {recipe.serves}</li>
            </ul>
          </div>
          <div className="ingredients-list">
            <h3 className="details-title">Ingredients</h3>
            <ul className="details-lists">
              {recipe.ingredients && ingredients()}
            </ul>
          </div>
        </div>
        <div className="instructions-container">
          <h3 className="details-title">Instructions</h3>
          <p>{recipe.instructions && recipe.instructions}</p>
        </div>
      </section>
    </>
  );
};

export default DetailScreen;
