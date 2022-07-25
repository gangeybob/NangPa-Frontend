import RecipeDetailItem from "./RecipeDetailItem";
import styled from "styled-components";

const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 25px 0px 0px 0px;
`;

const RecipeDetailItemContainer = styled.div`
  border-bottom: 0.5px solid rgba(46, 140, 254, 0.3);
`;

const RecipeDetailItemListContainer = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  padding: 0 27px;
`;

function RecipeDetailItemList({ recipeDescription }) {
  return (
    <RecipeDetailItemListContainer>
      <StyledText>레시피</StyledText>
      {recipeDescription?.map((item) => {
        return (
          <RecipeDetailItemContainer>
            <RecipeDetailItem
              description={item.cookingDc}
              src={item.streStepImgUrl}
              no={item.cookingNo}
            />
          </RecipeDetailItemContainer>
        );
      })}
    </RecipeDetailItemListContainer>
  );
}

export default RecipeDetailItemList;
