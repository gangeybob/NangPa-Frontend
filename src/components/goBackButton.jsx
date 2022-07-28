import React from "react";
import styled from "styled-components";
import { ReactComponent as Cookie } from "../assets/Arrow-Right.svg";
import { useNavigate } from "react-router-dom";

const GoBackButton = ({ ...rest }) => {
  const navigate = useNavigate();

  return (
    <Wrapper {...rest}>
      <StyledMyIcon onClick={() => navigate(-1)}> </StyledMyIcon>
    </Wrapper>
  );
};

export default GoBackButton;

const Wrapper = styled.div``;

const StyledMyIcon = styled(Cookie)`
  cursor: pointer;
`;
