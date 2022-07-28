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
  align-items: center;
  flex-direction: row;
  margin-right: 8px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

const FoodText = styled.div`
  margin-right: 5px;
`;
