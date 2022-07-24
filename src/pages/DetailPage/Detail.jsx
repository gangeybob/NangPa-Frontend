import styled from "styled-components";
import { ReactComponent as Share } from "../../assets/share.svg";
import { ReactComponent as Bookmark } from "../../assets/bookmark.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import IngredientTagList from "./IngredientTagList";
import RecipeDetailItemList from "./RecipeDetailItemList";

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
  width: auto;
  height: 100%;
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
  gap: 13px;
`;

const ContentsContainer = styled.div`
  margin: 19px 23px;
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
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.02em;

  color: #918e8e;
`;

const IngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 22px 0px 12px 0px;
`;

const Border = styled.div`
  background: rgba(35, 35, 35, 0.37);
  width: 100%;
  height: 1px;
  margin: 32px 0px 20px 0px;
`;

function Detail() {
  return (
    <>
      <RecipePhotoContainer>
        <RecipePhoto src="https://recipe1.ezmember.co.kr/cache/recipe/2020/12/06/c36207a3c0d453a4bc4eb14e19d5afb91.jpg" />
        <RecipePhotoGradient />
      </RecipePhotoContainer>
      <ContentsContainer>
        <SnsContainer>
          <LikeWrapper>
            <Like />
            {/* 좋아요버튼 기능구현 필요 */}
            <LikeCount>14k</LikeCount>
          </LikeWrapper>
          <BtnContainer>
            <Share />
            <Bookmark />
          </BtnContainer>
        </SnsContainer>
        <RecipeTitle>여름을 책임질 신선한 간장계란밥!</RecipeTitle>
        <RecipeShortDescription>작은설명이 들어갈수있게</RecipeShortDescription>
        <IngredientContainer>
          <Subtitle>식재료</Subtitle>
          <IngredientTagList />
        </IngredientContainer>
        <RecipeDetailItemList />
        <Border />
      </ContentsContainer>
    </>
  );
}

export default Detail;
