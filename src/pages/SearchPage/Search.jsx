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
import axios from "axios";
import Navigation from "../../components/navigation";
import { useRecoilState } from "recoil";
import { myFrigeAtom, selectedIngredientAtom } from "../../atom";
import FrigeButton from "../../components/frigeButton";
//ada
const RefridgeTitle = styled.h2`
  margin-top: 15px;
  margin-bottom: 19px;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.165px;
  img {
    transform: translateY(-20%);
  }
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
  border-bottom: 0.5px solid rgba(73, 73, 73, 0.4);
`;
const SelectItemArea = styled.h3`
  height: 165px;
  padding: 17px 19px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.165px;
  color: #a4a4a4;
  background: #f2f2f2;
  border-radius: 10px;
`;
const FoodButtonContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  background-color: #f1f1f1;
  width: 100%;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const FormControlWrapper = styled.div`
  position: relative;
`;
const StyledMyIcon = styled(searchXButton)`
  display: ${({ searchInput }) => (searchInput ? "block" : "none")};
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
`;
function SearchIndex() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  const [viewMyFrigeAtom, setViewMyFrigeAtom] = useRecoilState(myFrigeAtom);
  console.log(viewMyFrigeAtom);

  useEffect(() => {
    axios
      .get("https://naengpa.herokuapp.com/recipe/getIrdnt")
      .then((Response) => {
        setData(Response.data);
        console.log(data);
        console.log(Response.data[0]);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(searchInput);
  }, [searchInput]);
  const addListClick = (e) => {
    setSelectedIngredient([...selectedIngredient, e.target.outerText]);
    console.log(selectedIngredient);
  };
  const handleDelete = (e) => {
    console.log(e);
    setSelectedIngredient(
      selectedIngredient.filter((item) => item !== e.target.outerText)
    );
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
    console.log(selectedIngredient);
  };
  return (
    <Container className="min-vh-100 d-flex flex-column search_wrap">
      <Row xs={12}>
        <Col xs={12}>
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
            <FormControl
              className="border border-0 search-input"
              placeholder="검색어를 입력해주세요"
              value={searchInput}
              onChange={handleChangingSearch}
            />
            <StyledMyIcon
              searchInput={searchInput}
              onClick={handleXButton}
            ></StyledMyIcon>
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
                      {item.title}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          />
        </Col>
      </Row>
      <Row xs={12} className="mt-auto d-flex flex-column-reverse">
        <Col xs={12}>
          <SelectTitle className="text">이 재료들로 요리해요</SelectTitle>
          {/* TODO: 선택한 재료가 있는 경우/없는 경우*/}
          <FoodButtonContainer>
            dad
            {selectedIngredient === []
              ? ""
              : selectedIngredient.map((item) => (
                  <FoodButton
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
            {viewMyFrigeAtom === []
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
          <Nav.Link href="/resultlist" className="text-center nav-search">
            레시피 검색하기
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
export default SearchIndex;
