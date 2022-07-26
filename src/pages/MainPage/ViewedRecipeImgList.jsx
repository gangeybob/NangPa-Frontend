import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { viewedRecipeAtom } from "../../atom";

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
  //TODO: 최근 본 배열을 넘겨주고 해당하는 사진들을 받아오는 api가 필요.

  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch(
  //         `https://naengpa.herokuapp.com/recipe/getRecipeDetail/${recipeId}`
  //       );
  //       const json = await response.json();
  //       setRecipeDetail(json);
  //     })();
  //   }, [recipeDetail, recipeId]);

  const [viewedRecipe, setViewedRecipe] = useRecoilState(viewedRecipeAtom);
  const setObjViewedRecipe = new Set(viewedRecipe);
  const limitViewedRecipe = [...setObjViewedRecipe].splice(0, 5);
  setViewedRecipe([...limitViewedRecipe]);

  return viewedRecipe.map((item) => {
    <div>
      <ViewedRecipeImg src={item.imgUrl} />
    </div>;
  });
}

export default ViewedRecipeImgList;
