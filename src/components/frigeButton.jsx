import React from "react";
import styled from "styled-components";

const FrigeButton = ({ item, handleAdd, index }) => {
  return (
    <Wrapper onClick={handleAdd}>
      <FoodText>{item}</FoodText>
    </Wrapper>
  );
};

export default FrigeButton;

const Wrapper = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.MAIN_COLOR};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  background-color: white;
`;

const FoodText = styled.div`
  margin-right: 5px;
`;
