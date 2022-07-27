import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { viewedRecipeAtom } from "../../atom";
import axios from "axios";

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

const ViewedRecipeImg = styled.img`
  height: 124px;
  width: 124px;
  object-fit: cover;
  border-radius: 12px;
`;

function ViewedRecipeImgList({ item }) {
  const [viewedRecipe, setViewedRecipe] = useRecoilState(viewedRecipeAtom);
  const limitViewedRecipe = [...new Set(viewedRecipe)].splice(0, 5);
  const numberLimitViewedRecipe = [];
  for (let x of limitViewedRecipe) {
    numberLimitViewedRecipe.push(Number(x));
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "POST",
      url: "https://nangpa-server.herokuapp.com/recipe/getCurRecipeList",
      data: {
        recipeIds: numberLimitViewedRecipe,
      },
    })
      .then((Response) => {
        setData(Response.data);
        console.log(data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [numberLimitViewedRecipe, data]);

  return data.map((item) => {
    <div>
      <ViewedRecipeImg src={item.imgUrl} />
    </div>;
  });
}

export default ViewedRecipeImgList;
