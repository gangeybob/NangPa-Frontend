import { useState } from "react";
import SearchFilter from "react-filter-search";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";
import { selectedIngredientAtom } from "../../atom";
import FrigeAllList from "./FrigeAllList";

let data = ["간장", "계란", "밥", "참기름", "버터"];

const FrigeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px 23px;
`;

const FrigeSearchContainer = styled.div`
  width: 100%;
  padding: 70px 23px 0px 23px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
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

function Frige() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  console.log(selectedIngredient);
  return (
    <>
      <FrigeSearchContainer>
        <FrigeTitle>셰프의{"\n"}냉장고 재료를 선택해주세요</FrigeTitle>
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
      </FrigeSearchContainer>
      <FrigeContainer>
        <FrigeAllList />
      </FrigeContainer>
    </>
  );
}

export default Frige;
