import { useEffect } from "react";
import { useState } from "react";
import SearchFilter from "react-filter-search";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";
import { myFrigeAtom } from "../../atom";
import AllFrigeList from "./AllFrigeList";

const FrigeSearchContainer = styled.div`
  width: 100%;
  padding: 70px 27px 0px 27px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  background-color: white;
`;

const FrigeTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
`;

const InputWrapper = styled.div`
  position: relative;
  height: 44px;
  width: 100%;
  background: #f1f1f1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 18px;
`;

const StyledInput = styled.input`
  position: absolute;
  width: 90%;
  height: 100%;
  padding-left: 30px;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const IngredientItemList = styled.div`
  display: flex;
  padding-bottom: 23px;
  height: 100%;
  flex-wrap: wrap;
  gap: 8px;
`;

const AllFrigeListContainer = styled.div`
  display: flex;
  padding-bottom: 23px;
  height: calc(100vh - 360px);
`;

const IngredientItem = styled.button`
  height: 37px;
  border: 1px solid #2e8cfe;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0;
`;

const SelectedIngredientItem = styled.button`
  background: #2e8cfe;
  border: 1px solid #2e8cfe;
  border-radius: 50px;
  display: flex;
  align-items: center;
  height: 37px;
  color: white;
  padding: 0;
`;

const IngredientName = styled.p`
  margin: 10px 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.03em;
`;

const SelectionCompleteBtn = styled.button`
  bottom: 83px;
  background: #2e8cfe;
  border-radius: 10px;
  width: 100%;
  height: 58px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  box-shadow: 0px 3px 10px #a9d0ff;

  &:disabled {
    background: #a9a9a9;
    box-shadow: none;
  }
`;

const FrigeGradient = styled.div`
  z-index: 0;
  width: 100%;
  height: 170px;
  position: absolute;
  bottom: 64px;
  background: linear-gradient(
    181.02deg,
    rgba(255, 255, 255, 0) 13.62%,
    #ffffff 55.49%
  );
`;

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  padding: 0 27px;
  position: fixed;
  max-width: 420px;
  bottom: 80px;
`;

function Frige() {
  const [searchInput, setSearchInput] = useState("");
  const [myFrige, setMyFrige] = useRecoilState(myFrigeAtom);
  const [irdnt, setIrdnt] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://nangpa-server.herokuapp.com/recipe/getIrdnt"
      );
      const json = await response.json();
      setIrdnt(json);
    })();
  }, []);

  return (
    <>
      <FrigeSearchContainer>
        <FrigeTitle>셰프의 냉장고 재료를{"\n"}선택해주세요</FrigeTitle>
        <InputWrapper>
          <Search />
          <StyledInput
            className="border border-0 search-input"
            placeholder="찾으시는 재료의 검색도 가능해요"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </InputWrapper>
        <SearchFilter
          value={searchInput}
          data={irdnt}
          renderResults={(results) => (
            <IngredientItemList>
              {results.map((item) =>
                searchInput === "" ? null : (
                  <div>
                    {myFrige.indexOf(item.irdntNm) === -1 ? (
                      <IngredientItem
                        onClick={() => {
                          setMyFrige((prev) => [...prev, item.irdntNm]);
                        }}
                      >
                        <IngredientName>{item.irdntNm}</IngredientName>
                      </IngredientItem>
                    ) : (
                      <SelectedIngredientItem
                        onClick={() =>
                          setMyFrige((prev) =>
                            [...prev].filter(
                              (element) => element !== item.irdntNm
                            )
                          )
                        }
                      >
                        <IngredientName>{item.irdntNm}</IngredientName>
                      </SelectedIngredientItem>
                    )}
                  </div>
                )
              )}
            </IngredientItemList>
          )}
        />
      </FrigeSearchContainer>
      <AllFrigeListContainer>
        <AllFrigeList irdnt={irdnt} />
      </AllFrigeListContainer>
      <Wrapper>
        {myFrige.length === 0 ? (
          <SelectionCompleteBtn disabled>선택 완료</SelectionCompleteBtn>
        ) : (
          <Link to={{ pathname: "/myfrige" }}>
            <SelectionCompleteBtn>선택 완료</SelectionCompleteBtn>
          </Link>
        )}
      </Wrapper>
      <FrigeGradient />
    </>
  );
}

export default Frige;
