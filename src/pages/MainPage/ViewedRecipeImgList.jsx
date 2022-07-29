import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { viewedRecipeAtom } from "../../atom";
import axios from "axios";
import ViewedRecipeImgItem from "./ViewedRecipeImgItem";
import { Link } from "react-router-dom";

const ViewedRecipeImgListContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const ViewedRecipePhotoGradient = styled.div`
  width: 132px;
  height: 124px;
  position: absolute;
  right: -1px;
  background: linear-gradient(
    270deg,
    #f8fbff 0%,
    rgba(255, 255, 255, 0) 96.81%
  );
`;

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
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <ViewedRecipeImgListContainer>
      <ViewedRecipePhotoGradient />
      {numberLimitViewedRecipe.map((item) => {
        for (let x of viewedRecipeData) {
          if (x.recipeId === item) {
            return (
              <Link to={`/${x.recipeId}/detail`}>
                <div>
                  <ViewedRecipeImgItem src={x.imgUrl} />
                </div>
              </Link>
            );
          }
        }
      })}
    </ViewedRecipeImgListContainer>
  );
}

export default ViewedRecipeImgList;
