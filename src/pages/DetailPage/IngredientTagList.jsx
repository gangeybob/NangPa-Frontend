import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectedIngredientAtom } from "../../atom";

const StyledIngredientTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SelectedIngredientTag = styled.div`
  align-items: center;
  height: 30px;
  background: #2e8cfe;
  padding: 0px 18px;
  border: 1px solid #2e8cfe;
  border-radius: 50px;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.05em;

  color: #ffffff;
`;

const UnSelectedIngredientTag = styled.div`
  align-items: center;
  height: 30px;
  background: #ffffff;
  border: 1px solid #a9a9a9;
  border-radius: 50px;
  padding: 0px 18px;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #a9a9a9;
`;

function IngredientTagList() {
  const data = ["토마토", "계란", "식빵", "파슬리", "호밀빵", "후추"];
  const setSelectedIngredientAtom = useSetRecoilState(selectedIngredientAtom);

  useEffect(() => {
    setSelectedIngredientAtom(["토마토", "계란", "식빵"]);
  }, [setSelectedIngredientAtom]);
  const selectedIngredient = useRecoilValue(selectedIngredientAtom);

  return (
    <StyledIngredientTagList>
      {data.map((item) => {
        for (let x of selectedIngredient) {
          if (x === item) {
            return (
              <SelectedIngredientTag key={item}>{item}</SelectedIngredientTag>
            );
          }
        }
        return (
          <UnSelectedIngredientTag key={item}>{item}</UnSelectedIngredientTag>
        );
      })}
    </StyledIngredientTagList>
  );
}

export default IngredientTagList;
