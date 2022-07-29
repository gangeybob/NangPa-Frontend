import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SideBar = ({ handleSidebar }) => {
  const width = 500;
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });
  return (
    <SideBarContainer onClick={handleSidebar}>
      <SideBarMain
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
        ref={side}
      >
        <SideBarButton onClick={() => toggleMenu()}></SideBarButton>
      </SideBarMain>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div``;
const SideBarMain = styled.div``;
const SideBarButton = styled.div``;
