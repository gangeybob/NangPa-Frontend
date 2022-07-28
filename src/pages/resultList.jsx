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

const ResultList = () => {
  const homeRef = useRef(0);
  const [byPopularState, setByPopularState] = useState(true);
  // const [mainTextIs, setMainTextIs] = useState(true);
  const [scrollLocation, setScrollLocation] = useState(0);
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  const [foodData, setFoodData] = useState([]);
  const [foodList, setFoodList] = useState([...selectedIngredient]);

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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
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
    entries.forEach((entry) => {
      console.log(entry);
    });
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
    console.log(e.target.id);
    navigate(`/${e.target.id}/detail`, { replace: false, state: e.target.id });
  };
  const handleScroll = () => {
    document.getElementById("root").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ResultListWrapper ref={homeRef}>
      <HeaderContainer>
        <ButtonIconContainer>
          <GoBackButton></GoBackButton>
          <FilterButton></FilterButton>
        </ButtonIconContainer>
        <TitleWhoIs scrollY={scrollY}>
          셰프의 재료로 만들 수 있는<br></br>멋진 요리들이에요{" "}
          <img
            width={25}
            height={25}
            alt=""
            src="https://ifh.cc/g/bkxs4R.png"
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
  padding: 20px;
  position: relative;
  width: 375px;
  margin: auto;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  width: 350px;
  position: fixed;
  top: 0px;
  padding-top: 10px;
  background-color: white;
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
    transform: translateY(-20%);
  }
`;

const TitleChosen = styled.div`
  margin-top: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  margin-bottom: 15px;
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
  padding-top: 217px;
  padding-bottom: 50px;
`;

const SortingLetter = styled.div`
  margin: 10px 0;
  text-align: end;
  font-size: 14px;
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
