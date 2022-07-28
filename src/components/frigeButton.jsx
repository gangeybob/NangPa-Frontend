import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedIngredientAtom } from "../atom";

const FrigeButton = ({ item, handleAdd }) => {
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  const valid = selectedIngredient.includes(item);
  return (
    <Wrapper valid={valid} onClick={handleAdd}>
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
  padding: 10px 15px;
  border-radius: 20px;
  pointer-events: ${({ valid }) => (valid ? "none" : "auto")};
  border: ${({ valid }) => (valid ? "" : "1px")} solid
    ${({ theme }) => theme.colors.MAIN_COLOR};
  font-size: 14px;
  color: ${({ valid }) => (valid ? "white" : "#2E8CFE")};
  background-color: ${({ valid }) => (valid ? "#2E8CFE" : "transparent")};
  height: 37px;
  margin-bottom: 10px;
`;

const FoodText = styled.div`
  margin-right: 5px;
`;
