import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import GoBackButton from "./goBackButton";

const HeaderBg = styled.div`
  width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  transition: background-color 0.1s ease-in;

  background-color: ${({ isScroll }) => (isScroll ? "white" : "transparent")};
`;

const FixedGoBackButton = styled(GoBackButton)`
  display: flex;
  align-items: center;
  margin-left: 26px;
`;

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  console.log(isScroll);

  return (
    <HeaderBg isScroll={isScroll}>
      <FixedGoBackButton />
    </HeaderBg>
  );
}

export default Header;
