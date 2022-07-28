import styled from "styled-components";

const ViewedRecipeImg = styled.img`
  height: 124px;
  width: 124px;
  object-fit: cover;
  border-radius: 12px;
`;

function ViewedRecipeImgItem({ src }) {
  return <ViewedRecipeImg src={src}></ViewedRecipeImg>;
}

export default ViewedRecipeImgItem;
