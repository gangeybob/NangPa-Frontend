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
      <Link to={"/frige"}>
        <StyledMyIconHome></StyledMyIconHome>
      </Link>
    </Container>
  );
};

export default Navigation;
const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 64px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const StyledMyIconHome = styled(Home)``;
