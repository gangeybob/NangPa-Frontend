import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { viewedRecipeAtom } from "../../atom";
import axios from "axios";
import ViewedRecipeImgItem from "./ViewedRecipeImgItem";

const mockData = [
  {
    recipeId: 76,
    imgUrl:
      "https://static.wtable.co.kr/image-resize/production/service/recipe/121/16x9/17715671-f763-4f85-ad7e-2b10097b77fb.jpg",
  },
  {
    recipeId: 239,
    imgUrl:
      "https://static.wtable.co.kr/image-resize/production/service/recipe/121/16x9/17715671-f763-4f85-ad7e-2b10097b77fb.jpg",
  },
];

function ViewedRecipeImgList({ item }) {
  const [viewedRecipe, setViewedRecipe] = useRecoilState(viewedRecipeAtom);
  const limitViewedRecipe = [...new Set(viewedRecipe)].splice(0, 5);
  const numberLimitViewedRecipe = [];
  for (let x of limitViewedRecipe) {
    numberLimitViewedRecipe.push(Number(x));
  }

  const [viewedRecipeData, setViewedRecipeData] = useState([]);

  useEffect(() => {
    axios({
      method: "POST",
      url: "https://nangpa-server.herokuapp.com/recipe/getCurRecipeList",
      data: {
        recipeIds: numberLimitViewedRecipe,
      },
    })
      .then((Response) => {
        setViewedRecipeData(Response.data);
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  console.log(viewedRecipeData);
  return viewedRecipeData.map((item) => {
    console.log(item.imgUrl);
    return (
      <div>
        <ViewedRecipeImgItem src={item.imgUrl} />
      </div>
    );
  });
}

export default ViewedRecipeImgList;
