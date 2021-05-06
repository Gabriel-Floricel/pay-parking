import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  function removeIngredient() {
    setIngredients(ingredients.salad - 1);
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <section className='BuildControls'>
        <p>Current price:</p>
        <div className='BuildControls'>
          <label>Salad</label>
          <button onClick={() => removeIngredient()} className='Less'>
            Remove
          </button>
          <button className='More'>Add</button>
        </div>
        <div className='BuildControls'>
          <label>Bacon</label>
          <button className='Less'>Remove</button>
          <button className='More'>Add</button>
        </div>
        <div className='BuildControls'>
          <label>Cheese</label>
          <button className='Less'>Remove</button>
          <button className='More'>Add</button>
        </div>
        <div className='BuildControls'>
          <label>Meat</label>
          <button className='Less'>Remove</button>
          <button className='More'>Add</button>
        </div>
        <button className='OrderButton'>ORDER NOW</button>
      </section>
    </>
  );
};

export default BurgerBuilder;
