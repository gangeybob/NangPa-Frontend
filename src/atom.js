import { atom } from "recoil";
export const selectedIngredientAtom = atom({
  key: "selectedIngredient",
  default: [],
});

// export const myFrigeAtom = atom({
//   key: "myFrige",
//   default: [],
// });

export const viewedRecipeAtom = atom({
  key: "viewedRecipe",
  default: [],
});

export const myFrigeAtom = atom({
  key: "viewedFrige",
  default: ["삽겹살", "굴소스", "중국당면", "사과"],
});
