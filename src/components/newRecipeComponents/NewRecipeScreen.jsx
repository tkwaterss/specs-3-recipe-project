import React from "react";

const NewRecipeScreen = () => {
  return (
    <section className="new-recipe-form-container">
      <h1>Tell us about your Recipe!</h1>
      <form className="new-recipe-form">
        <div className="input-containers recipe-name-url">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Image URL" />
        </div>
        <div className="input-containers recipe-type">
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="input-containers recipe-stats">
          <input type="number" placeholder="Prep Time" />
          <input type="number" placeholder="Cook Time" />
          <input type="number" placeholder=" Serves" />
        </div>
        <div className="input-containers recipe-ingredients-container">
          <div className="recipe-ingredients-inputs">
            <input type="text" placeholder="Ingredient" />
            <input type="number" placeholder="Quantity" />
          </div>
          <ul className="recipe-ingredients-list">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <button className="form-buttons">Add Another</button>
        <textarea
          className="form-instructions"
          cols="60"
          rows="6"
          placeholder="What are the instructions?"
        ></textarea>
        <button className="form-buttons">Save</button>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
