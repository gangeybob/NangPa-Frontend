import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AddFoodButton from "../components/addFoodButton";
import FilterButton from "../components/filterButton";
import GoBackButton from "../components/goBackButton";
import { ReactComponent as Heart } from "../assets/shape.svg";
import { ReactComponent as ArrowRight } from "../assets/upButton.svg";
import { useScroll } from "../hooks/useScroll";
import axios from "axios";
import { selectedIngredientAtom } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import FoodButtonAlone from "../components/foodButtonAlone";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const ResultList = () => {
  const homeRef = useRef(0);
  const [byPopularState, setByPopularState] = useState(true);
  // const [mainTextIs, setMainTextIs] = useState(true);
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  const [foodData, setFoodData] = useState([]);
  const [foodList, setFoodList] = useState([...selectedIngredient]);
  const [show, setShow] = useState(false);

  let abc = useRef();
  useEffect(() => {
    abc.current = [...selectedIngredient];
    axios({
      method: "POST",
      url: "https://nangpa-server.herokuapp.com/recipe/getRecipeList",
      data: {
        irdntNms: [...selectedIngredient],
      },
      headers: { contentType: "application/json" },
    })
      .then((res) => {
        setFoodData(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  const { scrollY } = useScroll();

  useEffect(() => {});
  const observeroption = {
    root: null,
    rootmargin: "0px",
    threshold: 0.3,
  };
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {});
  };
  const observer = new IntersectionObserver(observerCallback, observeroption);

  const handleByPopular = () => {
    setFoodData(
      foodData.sort((a, b) => {
        return Number(a.likeCnt) - Number(b.likeCnt);
      })
    );
    setByPopularState(true);
  };

  const handleByCorrect = () => {
    setFoodData(
      foodData.sort((a, b) => {
        return a.containCnt - b.containCnt;
      })
    );
    setByPopularState(false);
  };
  const handleDelete = (e) => {
    setFoodList([foodList].filter((item) => item !== e.target.outerText));
  };

  const navigate = useNavigate();
  const clickHistoryData = (e) => {
    navigate(`/${e.target.id}/detail`, { replace: false, state: e.target.id });
  };
  const handleScroll = () => {
    document.getElementById("root").scrollIntoView({ behavior: "smooth" });
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <ResultListWrapper ref={homeRef}>
      <Modal
        onHide={handleClose}
        show={show}
        size="lg"
        centered
        className="error-modal"
      >
        <Modal.Header>
          <Modal.Title>필터기능은 준비 중입니다</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          보다 나은 서비스를 위하여 필터기능 준비 중에 있습니다.
          <br />
          빠른 시일 내에 준비하여 찾아뵙겠습니다.
        </Modal.Body>
        <Button onClick={handleClose}>닫기</Button>
      </Modal>
      <HeaderContainer>
        <ButtonIconContainer>
          <GoBackButton></GoBackButton>
          <FilterButton handleShow={handleShow}></FilterButton>
        </ButtonIconContainer>
        <TitleWhoIs scrollY={scrollY}>
          셰프의 재료로 만들 수 있는<br></br>멋진 요리들이에요{" "}
          <img
            width={35}
            height={35}
            alt=""
            src="https://ifh.cc/g/MzlDmN.png"
          ></img>
        </TitleWhoIs>
        <TitleChosen>선택한 재료</TitleChosen>
        <FoodListWrapper>
          <AddFoodButton></AddFoodButton>
          {selectedIngredient.map((item) => (
            <FoodButtonAlone
              handleDelete={handleDelete}
              item={item}
            ></FoodButtonAlone>
          ))}
        </FoodListWrapper>
      </HeaderContainer>
      <MainContainer>
        <SortingLetter byPopularState={byPopularState}>
          <button
            byPopularState={byPopularState}
            onClick={handleByPopular}
            className="byPopular"
          >
            인기순
          </button>
          <button
            byPopularState={byPopularState}
            onClick={handleByCorrect}
            className="byCorrect"
          >
            정확도순
          </button>
        </SortingLetter>
        <ListContainer>
          {foodData.map((item) => (
            <TextWrapper
              key={item.recipeId}
              onClick={clickHistoryData}
              id={item.recipeId}
            >
              <img src={item.imgUrl} alt="" />
              <SummaryAndLike>
                <ListSpan>{item.summary}</ListSpan>
                <IconWrapper>
                  <StyledMyIcon></StyledMyIcon>
                  <span>{item.likeCnt}</span>
                </IconWrapper>
              </SummaryAndLike>
            </TextWrapper>
          ))}
        </ListContainer>
      </MainContainer>
      <UpButton scrollY={scrollY} onClick={handleScroll}>
        <StyledMyIconUp></StyledMyIconUp>
      </UpButton>
    </ResultListWrapper>
  );
};

export default ResultList;
const ResultListWrapper = styled.div`
  position: relative;
  width: 375px;
  margin: auto;
  box-sizing: border-box;
`;

const ModalStyle = styled(Modal)`
  padding: 20px;
  width: 100%;
  position: absolute;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 375px;
  position: fixed;
  top: 0px;
  padding-top: 10px;
  background-color: white;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const ButtonIconContainer = styled.div`
  margin-top: 12px;
  width: 335px;
  display: flex;
  justify-content: space-between;
`;

const TitleWhoIs = styled.div`
  display: ${({ scrollY }) => (scrollY > 145 ? "none" : "block")};
  transition: 300ms all ease-in-out;
  margin-top: 12px;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  img {
    transform: translateX(-10%) translateY(-10%);
  }
`;

const TitleChosen = styled.div`
  margin-top: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  margin-bottom: 15px;
  color: #a6a6a6;
`;

const FoodListWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MainContainer = styled.div`
  padding: 24px;
  padding-top: 240px;
  padding-bottom: 50px;
`;

const SortingLetter = styled.div`
  margin: 10px 0;
  text-align: end;
  font-size: 14px;
  font-weight: 600;
  .byPopular {
    color: ${({ byPopularState }) => (byPopularState ? "#2E8CFE" : "#989898")};
    background-color: ${({ byPopularState }) =>
      byPopularState ? "#E4F0FF" : "transparent"};
    padding: 5px 10px;
    border-radius: 10px;
  }
  .byCorrect {
    color: ${({ byPopularState }) => (byPopularState ? "#989898" : "#2E8CFE")};
    background-color: ${({ byPopularState }) =>
      byPopularState ? "transparent" : "#E4F0FF"};
    padding: 5px 10px;
    border-radius: 10px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 335px;
    height: 184px;
    border-radius: 10px;
    pointer-events: none;
    margin-bottom: 12px;
  }
`;
const ListSpan = styled.div`
  margin-right: 17px;
  font-size: 14px;
  font-weight: 600;
`;

const StyledMyIcon = styled(Heart)``;

const IconWrapper = styled.div`
  pointer-events: none;
  white-space: nowrap;
  font-size: 14px;
  span {
    margin-left: 4px;
    font-weight: 600;
  }
`;

const SummaryAndLike = styled.div`
  pointer-events: none;
  display: flex;
  justify-content: space-between;
`;

const UpButton = styled.button`
  display: ${({ scrollY }) => (scrollY > 0 ? "auto" : "none")};
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  position: fixed;
  bottom: 94px;
  right: 25px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  transition: all 300ms ease;
`;
const StyledMyIconUp = styled(ArrowRight)`
  transform: translateY(-2px);
`;
