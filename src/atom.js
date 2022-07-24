import { atom } from "recoil";

export const selectedIngredientAtom = atom({
  key: "selectedIngredient",
  default: ["토마토", "계란", "식빵"],
});

export const viewedRecipeAtom = atom({
  key: "viewedRecipe",
  default: [],
});
