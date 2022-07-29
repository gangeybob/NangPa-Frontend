import React from "react";
import styled from "styled-components";
const FoodButtonAlone = ({ item, handleDelete }) => {
  return (
    <Wrapper onClick={handleDelete}>
      <FoodText>{item}</FoodText>
    </Wrapper>
  );
};
export default FoodButtonAlone;
const Wrapper = styled.button`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  padding: 7px 15px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

const FoodText = styled.div``;
