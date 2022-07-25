import React from "react";
import styled from "styled-components";
import { ReactComponent as XButton } from "../assets/XButton.svg";
const FoodButton = ({ item, handleDelete, index }) => {
  return (
    <Wrapper onClick={handleDelete}>
      <FoodText>{item}</FoodText>
      <StyledMyIcon></StyledMyIcon>
    </Wrapper>
  );
};
export default FoodButton;
const Wrapper = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

const StyledMyIcon = styled(XButton)`
  pointer-events: none;
`;

const FoodText = styled.div`
  margin-right: 5px;
`;
