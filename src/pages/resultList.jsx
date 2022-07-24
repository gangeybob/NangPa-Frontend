import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddFoodButton from "../components/addFoodButton";
import FilterButton from "../components/filterButton";
import FoodButton from "../components/foodButton";
import GoBackButton from "../components/goBackButton";
import { ReactComponent as Heart } from "../assets/shape.svg";
import { useScroll } from "../hooks/useScroll";

const ResultList = () => {
  const [byPopularState, setByPopularState] = useState(true);
  // const [mainTextIs, setMainTextIs] = useState(true);
  const [scrollLocation, setScrollLocation] = useState(0);

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
  const list = ["계란", "토마토", "식빵", "마늘", "adad", "DAda"];
  const recipeList = [
    {
      text: "여름을 책임질 신선한 샌드위치!",
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3B5XVzMn2C1ClhE_s1rtYuYm7QXFnqz4wHw&usqp=CAU",
    },
    {
      text: "입맛없을 떈 초달달 토마토 달걀볶음",
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3B5XVzMn2C1ClhE_s1rtYuYm7QXFnqz4wHw&usqp=CAU",
    },
    {
      text: "입맛없을 떈 초달달 토마토 달걀볶음",
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3B5XVzMn2C1ClhE_s1rtYuYm7QXFnqz4wHw&usqp=CAU",
    },
    {
      text: "입맛없을 떈 초달달 토마토 달걀볶음",
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3B5XVzMn2C1ClhE_s1rtYuYm7QXFnqz4wHw&usqp=CAU",
    },
  ];
  const [foodList, setFoodList] = useState(list);
  const [like, setLike] = useState(130);
  const [likeClicked, setLikeClicked] = useState(false);
  const handleByPopular = () => {
    setByPopularState(true);
  };

  const handleByCorrect = () => {
    setByPopularState(false);
  };
  const handleDelete = (e) => {
    setFoodList(foodList.filter((item) => item !== e.target.outerText));
  };
  const handleLike = () => {
    setLikeClicked(likeClicked ? false : true);
    if (likeClicked) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };
  const clickHistoryData = () => {};
  return (
    <ResultListWrapper>
      <HeaderContainer>
        <ButtonIconContainer>
          <GoBackButton></GoBackButton>
          <FilterButton></FilterButton>
        </ButtonIconContainer>
        <TitleWhoIs scrollY={scrollY}>
          웬디님의 재료로 만들 수 있는<br></br>멋진 요리들이에요
        </TitleWhoIs>
        <TitleChosen>선택한 재료</TitleChosen>
        <FoodListWrapper>
          <AddFoodButton></AddFoodButton>
          {foodList.map((item) => (
            <FoodButton handleDelete={handleDelete} item={item}></FoodButton>
          ))}
        </FoodListWrapper>
      </HeaderContainer>
      <MainContainer>
        <SortingLetter byPopularState={byPopularState}>
          <button onClick={handleByPopular} className="byPopular">
            인기순
          </button>
          <button onClick={handleByCorrect} className="byCorrect">
            최신순
          </button>
        </SortingLetter>
        <ListContainer>
          {recipeList.map((item) => (
            <TextWrapper>
              <img onClick={clickHistoryData} src={item.src} alt="" />
              <ListSpan>{item.text}</ListSpan>
              <IconWrapper onClick={handleLike}>
                <StyledMyIcon></StyledMyIcon>
                <span>{like}</span>
              </IconWrapper>
            </TextWrapper>
          ))}
        </ListContainer>
      </MainContainer>
    </ResultListWrapper>
  );
};

export default ResultList;
const ResultListWrapper = styled.div`
  padding: 20px;
  position: relative;
  width: 375px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
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
`;
const MainContainer = styled.div`
  padding-top: 202px;
`;

const SortingLetter = styled.div`
  margin: 10px 0;
  text-align: end;
  .byPopular {
    color: ${({ byPopularState }) => (byPopularState ? "black" : "#989898")};
  }
  .byCorrect {
    color: ${({ byPopularState }) => (byPopularState ? "#989898" : "black")};
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
`;
const ListSpan = styled.div``;

const StyledMyIcon = styled(Heart)``;
const IconWrapper = styled.div`
  span {
    margin-left: 5px;
  }
`;
