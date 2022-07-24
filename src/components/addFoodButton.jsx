import React from "react";
import styled from "styled-components";
import { ReactComponent as PlusButton } from "../assets/PlusButton.svg";
import { Link } from "react-router-dom";

const AddFoodButton = () => {
  return (
    <Wrapper>
      <Link to={"/search"}>
        <Button>
          <StyledMyIcon></StyledMyIcon>
        </Button>
      </Link>
    </Wrapper>
  );
};

export default AddFoodButton;
const Wrapper = styled.div`
  margin-right: 5px;
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
`;

const StyledMyIcon = styled(PlusButton)`
  cursor: pointer;
`;
