import React, { useEffect, useState } from "react";
import SearchFilter from "react-filter-search";
import {
  Container,
  Row,
  Col,
  FormControl,
  ListGroup,
  Button,
  Nav,
} from "react-bootstrap";
import styled from "styled-components";
import "./search.css";
import FoodButton from "../../components/foodButton";
import { ReactComponent as searchXButton } from "../../assets/searchXButton.svg";
import { ReactComponent as inputSearchButton } from "../../assets/inputSearch.svg";
import axios from "axios";
import { useRecoilState } from "recoil";
import { myFrigeAtom, selectedIngredientAtom } from "../../atom";
import FrigeButton from "../../components/frigeButton";
import { useNavigate } from "react-router-dom";

const RefridgeTitle = styled.h2`
  margin-top: 34px;
  margin-bottom: 19px;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.165px;
  img {
    transform: translateY(-20%);
  }
`;
const StyledContainer = styled(Container)`
  padding-left: 27px;
  padding-right: 27px;
`;
const SelectTitle = styled.h3`
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.165px;
`;
const SelectedItemWrap = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
`;
const SelectItemArea = styled.h3`
  display: flex;
  flex-wrap: wrap;
  height: 165px;
  padding: 17px 19px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.165px;
  color: #a4a4a4;
  background: var(--input-text-bg);
  border-radius: 10px;
`;
const FoodButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 120px;
  background: var(--input-text-bg);
  width: 100%;
  padding: 21px 14px;
  -ms-overflow-style: none;
  border-radius: 10px;
`;

const SearchContainer = styled.div`
  padding-bottom: 37px;
`;

const StyledMyIconSearch = styled(inputSearchButton)`
  display: ${({ searchInput }) => (searchInput ? "none" : "block")};
  cursor: pointer;
  position: absolute;
  left: 15px;
  top: 22px;
  transform: translateY(-50%);
`;
const FormControlWrapper = styled.div`
  position: relative;
`;
const StyledMyIconSearchX = styled(searchXButton)`
  display: ${({ searchInput }) => (searchInput ? "block" : "none")};
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 13px;
`;

const StyledFormControl = styled(FormControl)`
  padding: 13px 15px;
  padding-left: ${({ searchInput }) => (searchInput === "" ? "37px" : "13px")};
  background: var(--input-text-bg);
  border-radius: 10px;
  height: 42px;
  font-size: 14px;
  font-weight: 500;
`;

const RecipeSearchButton = styled.div`
  margin-bottom: 21px;
  padding: 10px 20px;
  height: 57px;
  box-shadow: 0px 3px 10px #a9d0ff;
  line-height: 65px;
  font-weight: 600;
  font-size: 16px;
  line-height: 37px;
  letter-spacing: -0.165px;
  color: #fff;
  background: ${({ dataState }) => (dataState ? "#2e8cfe" : "#A9A9A9")};
  border-radius: 10px;
  box-sizing: border-box;
  pointer-events: ${({ dataState }) => (dataState ? "auto" : "none")};
  cursor: pointer;
  text-align: center;
`;
function SearchIndex() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  const [viewMyFrigeAtom, setViewMyFrigeAtom] = useRecoilState(myFrigeAtom);
  const [dataState, SetDataState] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://nangpa-server.herokuapp.com/recipe/getIrdnt")
      .then((Response) => {
        let data = [];
        for (let i = 0; i < Response.data.length; i++) {
          data.push(Response.data[i].irdntNm);
        }
        setData(data);
        SetDataState(true);
      })
      .catch((Error) => {
        console.error(Error); //error타입으로
      });
  }, []);

  const addListClick = (e) => {
    setSelectedIngredient([...selectedIngredient, e.target.outerText]);
    setData(data.filter((item) => item !== e.target.outerText));
  };
  const handleDelete = (e) => {
    setSelectedIngredient(
      selectedIngredient.filter((item) => item !== e.target.outerText)
    );

    setData([...data, e.target.outerText]);
  };
  const handleChangingSearch = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value) {
    }
  };
  const handleXButton = () => {
    setSearchInput("");
  };
  const handleAdd = (e) => {
    setSelectedIngredient([...selectedIngredient, e.target.outerText]);
    setData(data.filter((item) => item !== e.target.outerText));
  };

  const navigate = useNavigate();

  const moveToNext = (e) => {
    navigate("/resultlist");
  };
  return (
    <StyledContainer className="container min-vh-100 d-flex flex-column search_wrap">
      <Row xs={12}>
        <SearchContainer>
          <RefridgeTitle>
            요리에 사용할 재료를
            <br />
            선택해주세요.{" "}
            <img
              alt=""
              width={25}
              height={25}
              src="https://ifh.cc/g/4lkTwh.png"
            ></img>
          </RefridgeTitle>
          <FormControlWrapper>
            <StyledMyIconSearch searchInput={searchInput}></StyledMyIconSearch>
            <StyledFormControl
              className="border border-0 search-input"
              placeholder="재료를 불러오고 있어요"
              value={searchInput}
              onChange={handleChangingSearch}
              searchInput={searchInput}
            />
            <StyledMyIconSearchX
              searchInput={searchInput}
              onClick={handleXButton}
            ></StyledMyIconSearchX>
          </FormControlWrapper>
          <SearchFilter
            value={searchInput}
            data={searchInput ? data : []}
            renderResults={(results) => (
              <ListGroup className="search-list d-inline-flex justify-cotent-start align-items-center flex-wrap">
                {results.map((item) => (
                  <ListGroup.Item className="search-item d-inline-flex border border-0">
                    {/* TODO: Convert to Commont button components  */}
                    <Button
                      onClick={addListClick}
                      className="btn-item bg-transparent text-dark"
                    >
                      {item}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          />
        </SearchContainer>
      </Row>
      <Row xs={12} className="mt-auto d-flex flex-column-reverse">
        <Col xs={12}>
          <SelectTitle className="text">이 재료들로 요리해요</SelectTitle>
          {/* TODO: 선택한 재료가 있는 경우/없는 경우*/}
          <FoodButtonContainer>
            {selectedIngredient === []
              ? ""
              : selectedIngredient.map((item) => (
                  <FoodButton
                    key={item.id}
                    handleDelete={handleDelete}
                    item={item}
                  ></FoodButton>
                ))}
          </FoodButtonContainer>
          <SelectedItemWrap></SelectedItemWrap>
        </Col>
        <Col xs={12}>
          <SelectTitle className="mt-20 mb-12 text">
            내 냉장고에서도 골라보세요
          </SelectTitle>
          <SelectItemArea className="w-100">
            {viewMyFrigeAtom.length === 0
              ? "냉장고 버튼을 눌러서 냉장고 내 재료를 채워주세요"
              : viewMyFrigeAtom.map((item) => (
                  <FrigeButton handleAdd={handleAdd} item={item}></FrigeButton>
                ))}
          </SelectItemArea>
        </Col>
      </Row>
      {/* TODO: 검색 결과 화면 */}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item className="w-100">
          <RecipeSearchButton dataState={dataState} onClick={moveToNext}>
            레시피 검색하기
          </RecipeSearchButton>
        </Nav.Item>
      </Nav>
    </StyledContainer>
  );
}
export default SearchIndex;
