import styled from "styled-components";
import { ReactComponent as Chevron } from "../../assets/chevron_right.svg";
import { useRecoilValue } from "recoil";
import { viewedRecipeAtom } from "../../atom";
import ViewedRecipeImgList from "./ViewedRecipeImgList";
import { useEffect } from "react";

const RecentlyViewedRecipeHeader = styled.div`
  width: 100%;
  padding: 0 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #181818;
  margin: 0;
`;

const ViewAllContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ViewAllText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #a9a9a9;
  margin: 0px 7px 0px 0px;
`;

const ViewedRecipeImgContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-left: 23px;
  width: 100%;
`;

function RecentlyViewedRecipe() {
  return (
    <>
      <RecentlyViewedRecipeHeader>
        <Title>최근 본 레시피</Title>
        <ViewAllContainer>
          <ViewAllText>모두보기</ViewAllText>
          <Chevron />
        </ViewAllContainer>
      </RecentlyViewedRecipeHeader>
      <ViewedRecipeImgContainer>
        <ViewedRecipeImgList />
      </ViewedRecipeImgContainer>
    </>
  );
}

export default RecentlyViewedRecipe;
