import styled from "styled-components";
import { useEffect } from "react";

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
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://naengpa.herokuapp.com/recipe/getRecipeDetail/${recipeId}`
      );
      const json = await response.json();
      setRecipeDetail(json);
    })();
  }, [recipeDetail, recipeId]);

  for (let x of mockData) {
    //TODO: 76대신 item 넣기
    return x.recipeId === 76 ? (
      <div>
        <ViewedRecipeImg src={x.imgUrl} />
      </div>
    ) : null;
  }
}

export default ViewedRecipeImgList;
