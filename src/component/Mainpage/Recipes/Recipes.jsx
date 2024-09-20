import { useState } from "react";
import "./Recipes.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { recipeList } from "./dataRecipeList";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Recipes({ selectedIngredients }) {
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const getMatchedIngredients = (recipeIngredients) => {
    return recipeIngredients.filter((ingredient) =>
      selectedIngredients.includes(ingredient)
    );
  };

  const handleClickOpen = (recipe) => {
    setSelectedRecipe(recipe);
    setOpen(recipe);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleFavorite = (recipeName, event) => {
    event.stopPropagation();
    setFavorites((prevFavorites) =>
      prevFavorites.includes(recipeName)
        ? prevFavorites.filter((name) => name !== recipeName)
        : [...prevFavorites, recipeName]
    );
  };

  return (
    <div className="RecipesSection">
      <h2>Recipes You Can Make</h2>
      <div className="RecipesGrid">
        {recipeList
          .filter(
            (recipe) => getMatchedIngredients(recipe.ingredients).length > 0
          )
          .map((recipe) => {
            const matchedIngredients = getMatchedIngredients(
              recipe.ingredients
            );
            const missingIngredients = recipe.ingredients.filter(
              (ingredient) => !selectedIngredients.includes(ingredient)
            );
            const isFavorited = favorites.includes(recipe.name);

            return (
              <div
                key={recipe.name}
                className="RecipeCard"
                onClick={() => handleClickOpen(recipe)}
              >
                <div className="RecipeCard-header">
                  <h3>{recipe.name}</h3>

                  <div
                    className="favorite-icon"
                    onClick={(event) => toggleFavorite(recipe.name, event)}
                    style={{ cursor: "pointer" }}
                  >
                    {isFavorited ? (
                      <FavoriteIcon style={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </div>
                </div>
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
      {selectedRecipe && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedRecipe.name}</DialogTitle>
          <DialogContent>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.image}
              style={{ width: "100%", height: "auto", marginBottom: "15px" }}
            />
            <DialogContentText>
              <strong>Description:</strong> {selectedRecipe.description}
            </DialogContentText>
            <DialogContentText>
              <strong>Ingredients:</strong>{" "}
              {selectedRecipe.ingredients.join(", ")}
            </DialogContentText>
            <DialogContentText>
              <strong>Calories:</strong> {selectedRecipe.calories} kcal
            </DialogContentText>
            <DialogContentText>
              <strong>Preparation Time:</strong>{" "}
              {selectedRecipe.preparationTime}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
