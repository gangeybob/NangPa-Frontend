import { atom } from "recoil";

export const selectedIngredientAtom = atom({
  key: "selectedIngredient",
  default: [],
});

export const viewedRecipeAtom = atom({
  key: "viewedRecipe",
  default: [],
});
