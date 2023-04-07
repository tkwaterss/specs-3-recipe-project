import React, { useState } from "react";
import { Formik, Field } from "formik";
import axios from "axios";

//TODO Implement use reducer for this state

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState('');

  console.log(ingredients);

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);

    setName("");
    setQuantity('');
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);

    axios.post("https://recipes.devmountain.com/recipes", values);

    //!formik.handleReset();
    //! on submit navigate to details page for new recipe
    
  };

  return (
    <section className="new-recipe-form-container">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="new-recipe-form">
            <div className="input-containers recipe-name-url">
              <input
                id="recipeName"
                name="recipeName"
                value={values.recipeName}
                onChange={handleChange}
                type="text"
                placeholder="Name"
              />
              <input
                id="imageURL"
                name="imageURL"
                value={values.imageURL} 
                onChange={handleChange}
                type="text"
                placeholder="Image URL"
              />
            </div>
            <div className="input-containers recipe-type">
              <label htmlFor="cook">
                <Field
                  className="radio-button"
                  id="cook"
                  name="type"
                  value="cook"
                  onChange={handleChange}
                  type="radio"
                />
                Cook
              </label>
              <label htmlFor="bake">
                <Field
                  className="radio-button"
                  id="bake"
                  name="type"
                  value="bake"
                  onChange={handleChange}
                  type="radio"
                />
                Bake
              </label>
              <label htmlFor="drink">
                <Field
                  className="radio-button"
                  id="drink"
                  name="type"
                  value="drink"
                  onChange={handleChange}
                  type="radio"
                />
                Drink
              </label>
            </div>
            <div className="input-containers recipe-stats">
              <input
                id="prepTime"
                name="prepTime"
                value={values.prepTime}
                onChange={handleChange}
                type="text"
                placeholder="Prep Time"
              />
              <input
                id="cookTime"
                name="cookTime"
                value={values.cookTime}
                onChange={handleChange}
                type="text"
                placeholder="Cook Time"
              />
              <input
                id="serves"
                name="serves"
                value={values.serves}
                onChange={handleChange}
                type="text"
                placeholder=" Serves"
              />
            </div>
            <div className="input-containers recipe-ingredients-container">
              <div className="recipe-ingredients-inputs">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Ingredient"
                />
                <input
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  type="text"
                  placeholder="Quantity"
                />
              </div>
              <ul className="recipe-ingredients-list">
                {ingredients.map(item => {
                  return <li>{`${item.quantity} ${item.name}`}</li>
                })}
              </ul>
            </div>
            <button
              id="add-ingredient-btn"
              type="button"
              onClick={addIngredient}
              className="form-buttons"
            >
              Add Another
            </button>
            <textarea
              id="instructions"
              name="instructions"
              value={values.instructions}
              onChange={handleChange}
              className="form-instructions"
              cols="60"
              rows="6"
              placeholder="What are the instructions?"
            ></textarea>
            <button type="submit" className="form-buttons">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
