import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedIngredientAtom } from "../../atom";

const MyFrigeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0px 23px;
`;

const MyFrigeSubtitle = styled.p`
  white-space: pre-wrap;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #a3a3a3;
  margin-top: 71px;
`;

const MyFrigeTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.05em;
  margin: 0 0 27px 0;
`;

const MyFrigeListContainer = styled.div`
  background: rgba(46, 140, 254, 0.06);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 20px 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const MyFrigeItem = styled.button`
  background: #2e8cfe;
  border: 1px solid #2e8cfe;
  border-radius: 50px;
  display: flex;
  align-items: center;
  height: 37px;
  color: white;
`;

const MyFrigeName = styled.p`
  margin: 10px 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.03em;
`;

function MyFrige() {
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );
  return (
    <MyFrigeContainer>
      <MyFrigeSubtitle>
        오래된 재료는 비워지고{"\n"}행복은 채워질
      </MyFrigeSubtitle>
      <MyFrigeTitle>셰프의 냉장고 ❄️</MyFrigeTitle>
      <MyFrigeListContainer>
        {selectedIngredient.map((item) => (
          <MyFrigeItem>
            <MyFrigeName>{item}</MyFrigeName>
          </MyFrigeItem>
        ))}
      </MyFrigeListContainer>
    </MyFrigeContainer>
  );
}

export default MyFrige;
