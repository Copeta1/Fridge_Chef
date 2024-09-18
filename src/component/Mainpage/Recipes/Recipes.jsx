// src/Recipes.js
import React from "react";
import "./Recipes.css";

export default function Recipes({ selectedIngredients }) {
  const recipeList = [
    {
      name: "Grilled Chicken Salad",
      ingredients: ["Chicken Breast", "Spinach", "Avocado", "Carrot"],
    },
    {
      name: "Tofu Stir Fry",
      ingredients: ["Tofu", "Broccoli", "Brown Rice", "Carrot"],
    },
    {
      name: "Salmon with Sweet Potato",
      ingredients: ["Salmon", "Sweet Potato", "Spinach"],
    },
    {
      name: "Peanut Butter Smoothie",
      ingredients: ["Peanut Butter", "Greek Yogurt", "Blueberries", "Apple"],
    },
    {
      name: "Oven-Baked Salmon",
      ingredients: ["Salmon", "Broccoli", "Avocado"],
    },
  ];

  const getMissingIngredients = (recipeIngredients) => {
    return recipeIngredients.filter(
      (ingredient) => !selectedIngredients.includes(ingredient)
    );
  };

  const getMatchedIngredients = (recipeIngredients) => {
    return recipeIngredients.filter((ingredient) =>
      selectedIngredients.includes(ingredient)
    );
  };

  return (
    <div className="RecipesSection">
      <h2>Recipes You Can Make</h2>
      <div className="RecipesGrid">
        {recipeList.map((recipe) => {
          const matchedIngredients = getMatchedIngredients(recipe.ingredients);
          const missingIngredients = getMissingIngredients(recipe.ingredients);

          return (
            <div key={recipe.name} className="RecipeCard">
              <h3>{recipe.name}</h3>
              <p>Matched Ingredients: {matchedIngredients.join(", ")}</p>
              {missingIngredients.length > 0 ? (
                <p>Missing Ingredients: {missingIngredients.join(", ")}</p>
              ) : (
                <p style={{ color: "green" }}>
                  You have all the ingredients! Ready to make.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
