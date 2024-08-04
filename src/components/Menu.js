import React from "react";
import recipes from "../constants/recipes";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Our menu</h2>
        <button>Order Menu</button>
      </div>

      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.name} />
            <div className="menu-content">
              <div className="heading">
                <h4>{recipe.title}</h4>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn">Order now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
