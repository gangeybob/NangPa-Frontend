import styled from "styled-components";

const RecipeDetailPhotoContainer = styled.div`
  position: relative;
  height: 181px;
  width: 100%;
  overflow: hidden;
`;

const RecipeDetailPhoto = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: auto;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0px 0px 0px;
`;

const RecipeDescriptionText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 12px 0px 0px 0px;
`;

function RecipeDetailItem({ description, src }) {
  console.log(src);
  return (
    <ItemContainer>
      {src !== undefined ? (
        <RecipeDetailPhotoContainer>
          <RecipeDetailPhoto src={src}></RecipeDetailPhoto>
        </RecipeDetailPhotoContainer>
      ) : null}
      <RecipeDescriptionText>{description}</RecipeDescriptionText>
    </ItemContainer>
  );
}

export default RecipeDetailItem;
