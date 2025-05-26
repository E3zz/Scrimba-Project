import React from "react";
import { useState } from 'react';
import "./Main.css";
import Suggestions from "./Suggestions";
import { getRecipeFromAI } from "../ai";
const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{"• " + ingredient}</li>
))
  const handleSubmit = (formData)=>{
    const newIngredient = formData.get('ingredient')
    setIngredients(prev => [...prev , newIngredient])

  }
  const [getRecipe, setRecipe] = React.useState(false);
  console.log(getRecipe);

  async function getData (){
    const res =  await getRecipeFromAI(ingredients)
    console.log(res)
  }

  return (
    <>
      <main className="container">
        <form action={handleSubmit}>
        <div className="input-container">
          <input type="text"  name="ingredient" placeholder="e.g. oregano" className="input-box" />
          <button className="add-button">+ Add ingredient</button>
        </div>
        </form>
      {ingredients.length >= 1 ? 
      <section>
        <div className="ingredients-section">
          <h1>Ingredients on hand:</h1>
          <ul className="ingredients-list">
            {ingredientsListItems}
          </ul>
        </div>
        {ingredients.length >= 4 ? <div className="recipe-box">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list if ingredients.</p>
          </div>
          <button onClick={getData}>Get a recipe</button>
        </div> : <h3>Add {4 - ingredients.length} more ingredients to Generate a recipe </h3>}
        </section>
      : null}
      
      </main>
      {getRecipe ? <Suggestions/>: null  }
    </>
  );
};

export default Main;
