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
import { useRecoilState } from "recoil";
import { selectedIngredientAtom } from "../../atom";
//dada
// TODO : Change dummy
let data = ["간장", "계란", "밥", "참기름", "버터"];

const RefridgeTitle = styled.h2`
  margin-top: 15px;
  margin-bottom: 19px;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.165px;
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

const IngredientItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 23px;
`;

const IngredientItem = styled.button`
  height: 37px;
  border: 1px solid #2e8cfe;
  border-radius: 50px;
  display: flex;
  align-items: center;
`;

const SelectedIngredientItem = styled.button`
  background: #2e8cfe;
  border: 1px solid #2e8cfe;
  border-radius: 50px;
  display: flex;
  align-items: center;
  height: 37px;
  color: white;
`;

const IngredientName = styled.p`
  margin: 10px 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.03em;
`;

const SelectionCompleteBtn = styled.button`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  background: #2e8cfe;
  border-radius: 10px;
  width: 328px;
  height: 46px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  &:disabled {
    background: #a9a9a9;
  }
`;

function SearchIndex() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  console.log(selectedIngredient);
  useEffect(() => {
    // console.log(searchInput);
  }, [searchInput]);
  return (
    <Container className="min-vh-100 d-flex flex-column search_wrap">
      <Row xs={12}>
        <Col xs={12}>
          <RefridgeTitle>
            요리에 사용할 재료를
            <br />
            선택해주세요.
          </RefridgeTitle>
          <FormControl
            className="border border-0 search-input"
            placeholder="검색어를 입력해주세요"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchFilter
            value={searchInput}
            data={data}
            renderResults={(results) => (
              <IngredientItemList>
                {results.map((item) =>
                  searchInput === "" ? null : (
                    <div>
                      {selectedIngredient.indexOf(item) === -1 ? (
                        <IngredientItem
                          onClick={() =>
                            setSelectedIngredient((prev) => [...prev, item])
                          }
                        >
                          <IngredientName>{item}</IngredientName>
                        </IngredientItem>
                      ) : (
                        <SelectedIngredientItem
                          onClick={() =>
                            setSelectedIngredient((prev) =>
                              [...prev].filter((element) => element !== item)
                            )
                          }
                        >
                          <IngredientName>{item}</IngredientName>
                        </SelectedIngredientItem>
                      )}
                    </div>
                  )
                )}
              </IngredientItemList>
            )}
          />
        </Col>
      </Row>
      <Row xs={12} className="mt-auto d-flex flex-column-reverse">
        <Col xs={12}>
          <SelectTitle className="mt-20 mb-12 text">내 냉장고</SelectTitle>
          <SelectItemArea className="w-100">
            냉장고 버튼을 눌러서 냉장고 내 재료를 채워주세요
          </SelectItemArea>
        </Col>
        <Col xs={12}>
          {selectedIngredient.length === 0 ? null : (
            <>
              <SelectTitle className="text">선택한 재료</SelectTitle>
              <SelectedItemWrap></SelectedItemWrap>
            </>
          )}
        </Col>
      </Row>
      {/* TODO: 검색 결과 화면 */}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item className="w-100">
          <Nav.Link href="/home" className="text-center nav-search">
            레시피 검색하기
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default SearchIndex;
