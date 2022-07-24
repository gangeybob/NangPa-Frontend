import React from "react";
import styled from "styled-components";
import { ReactComponent as Filter } from "../assets/Filter.svg";

const FilterButton = () => {
  return (
    <Wrapper>
      <StyledMyIcon></StyledMyIcon>
    </Wrapper>
  );
};

export default FilterButton;

const Wrapper = styled.div``;

const StyledMyIcon = styled(Filter)`
  cursor: pointer;
`;
