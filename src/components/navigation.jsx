import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/icon_home.svg";

const Navigation = () => {
  return (
    <Container>
      <Link to={"/"}>
        <StyledMyIconHome></StyledMyIconHome>
      </Link>
    </Container>
  );
};

export default Navigation;
const Container = styled.div`
  position: fixed;
  bottom: 0;
`;

const StyledMyIconHome = styled(Home)``;
