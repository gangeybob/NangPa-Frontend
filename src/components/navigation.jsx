import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/icon_home.svg";
import { ReactComponent as community } from "../assets/icon_community.svg";
import { ReactComponent as mypage } from "../assets/icon_mypage.svg";
import { ReactComponent as refrigerator } from "../assets/icon_refrigerator.svg";
import { ReactComponent as search } from "../assets/icon_search.svg";

const Navigation = () => {
  return (
    <Container>
      <Link to={"/"}>
        <StyledMyIconHome></StyledMyIconHome>
      </Link>
      <Link to={"/search"}>
        <StyledMyIconSearch></StyledMyIconSearch>
      </Link>
      <Link to={"/myfrige"}>
        <StyledMyIconRefrigerator></StyledMyIconRefrigerator>
      </Link>
      <Link to={"/community"}>
        <StyledMyIconCommunity></StyledMyIconCommunity>
      </Link>
      <Link to={"/mypage"}>
        <StyledMyIconMypage></StyledMyIconMypage>
      </Link>
    </Container>
  );
};

export default Navigation;
const Container = styled.div`
  width: 420px;
  position: fixed;
  padding: 22px 30px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  height: 64px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1056;
`;

const StyledMyIconHome = styled(Home)``;
const StyledMyIconCommunity = styled(community)``;
const StyledMyIconMypage = styled(mypage)``;
const StyledMyIconRefrigerator = styled(refrigerator)``;
const StyledMyIconSearch = styled(search)``;
