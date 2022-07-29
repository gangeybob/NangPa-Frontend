import styled from "styled-components";
import { ReactComponent as Share } from "../../assets/share.svg";
import { ReactComponent as Bookmark } from "../../assets/bookmark.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import IngredientTagList from "./IngredientTagList";
import RecipeDetailItemList from "./RecipeDetailItemList";
import RecipeReviewList from "./RecipeReviewList";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { viewedRecipeAtom } from "../../atom";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import GoBackButton from "../../components/goBackButton";
import Header from "../../components/Header";

const RecipePhotoContainer = styled.div`
  position: relative;
  height: 470px;
  overflow: hidden;
`;

const RecipePhoto = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const RecipePhotoGradient = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.37) 100%
  );
`;

const SnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LikeCount = styled.p`
  margin: 0px 0px 0px 4px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ContentsContainer = styled.div`
  padding: 19px 27px 0 27px;
  display: flex;
  flex-direction: column;
`;

const RecipeTitle = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 0px;
  margin-bottom: 6px;
`;

const RecipeShortDescription = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.02em;

  color: #a6a6a6;
`;

const IngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const Subtitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 0;
  margin-bottom: 9px;
`;

const Border = styled.div`
  background: rgba(35, 35, 35, 0.37);
  width: 100%;
  height: 1px;
  margin: 32px 0px 20px 0px;
`;

const FixedGoBackButton = styled(GoBackButton)`
  display: flex;
  align-items: center;
  margin-left: 26px;
`;

function Detail() {
  const [viewedRecipe, setViewedRecipe] = useRecoilState(viewedRecipeAtom);
  const [recipeDetail, setRecipeDetail] = useState([]);
  useEffect(() => {
    setViewedRecipe((prev) => [recipeId, ...prev]);
  }, [setViewedRecipe]);
  const { recipeId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://nangpa-server.herokuapp.com/recipe/getRecipeDetail/${recipeId}`
      );
      const json = await response.json();
      setRecipeDetail(json);
    })();
  }, [recipeId]);

  const recipeName = recipeDetail?.recipeInfo?.recipeNmKo;
  const recipeSummary = recipeDetail?.recipeInfo?.summary;
  const recipeImg = recipeDetail?.recipeInfo?.imgUrl;
  const recipeIrdnts = recipeDetail?.recipeIrdnts;
  const recipeDescription = recipeDetail?.recipeCrses;

  return (
    <>
      <Header></Header>

      <RecipePhotoContainer>
        <RecipePhoto src={recipeImg} />
        <RecipePhotoGradient />
      </RecipePhotoContainer>
      <ContentsContainer>
        <RecipeTitle>{recipeName}</RecipeTitle>
        <RecipeShortDescription>{recipeSummary}</RecipeShortDescription>
        <IngredientContainer>
          <Subtitle>레시피 재료</Subtitle>
          <IngredientTagList recipeIrdnts={recipeIrdnts} />
        </IngredientContainer>
      </ContentsContainer>
      <RecipeDetailItemList recipeDescription={recipeDescription} />
      <RecipeReviewList />
    </>
  );
}

export default Detail;
