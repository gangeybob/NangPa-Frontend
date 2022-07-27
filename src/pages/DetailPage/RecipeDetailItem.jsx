import styled from "styled-components";

const RecipeDetailPhotoContainer = styled.div`
  position: relative;
  height: 181px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const RecipeDetailPhoto = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 181px;
  width: 100%;
  object-fit: cover;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0px 0px 0px;
`;

const RecipeDescriptionText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.01em;

  margin-top: 3px;
`;

const RecipeNoContainer = styled.div`
  width: 60px;
  height: 27px;
  background: rgba(46, 140, 254, 0.13);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-right: 10px;
  white-space: nowrap;
`;

const RecipeNoText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.165px;
  margin: 0;
  color: #2e8cfe;
`;

const RecipeDescriptionContainer = styled.div`
  display: flex;

  /* align-items: center; */
`;

function RecipeDetailItem({ description, src, no }) {
  return (
    <ItemContainer>
      {src !== "" ? (
        <RecipeDetailPhotoContainer>
          <RecipeDetailPhoto src={src} />
        </RecipeDetailPhotoContainer>
      ) : null}
      <RecipeDescriptionContainer>
        <RecipeNoContainer>
          <RecipeNoText>Step {no}</RecipeNoText>
        </RecipeNoContainer>
        <RecipeDescriptionText>{description}</RecipeDescriptionText>
      </RecipeDescriptionContainer>
    </ItemContainer>
  );
}

export default RecipeDetailItem;
