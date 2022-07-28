import { atom } from "recoil";
export const selectedIngredientAtom = atom({
  key: "selectedIngredient",
  default: [],
});

export const viewedRecipeAtom = atom({
  key: "viewedRecipe",
  default: [],
});

export const myFrigeAtom = atom({
  key: "viewedFrige",
  default: ["베이컨", "굴소스", "오이", "사과", "와사비", "밀가루", "빵가루"],
});
