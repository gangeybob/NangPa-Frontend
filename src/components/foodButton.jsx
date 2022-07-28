import React from "react";
import styled from "styled-components";
import { ReactComponent as XButton } from "../assets/XButton.svg";
const FoodButton = ({ item, handleDelete }) => {
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
  margin-bottom: 10px;
  height: 37px;
  padding: 15px;
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
  pointer-events: none;
`;
