import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedIngredientAtom } from "../../atom";

const data = [
  "쌀",
  "안심",
  "콩나물",
  "청포묵",
  "간장",
  "계란",
  "밥",
  "참기름",
  "버터",
  "쌀",
  "안심",
  "콩나물",
  "청포묵",
  "간장",
  "계란",
  "밥",
  "참기름",
  "버터",
  "쌀",
  "안심",
  "콩나물",
  "청포묵",
  "간장",
  "계란",
  "밥",
  "참기름",
  "버터",
  "쌀",
  "안심",
  "콩나물",
  "청포묵",
  "간장",
  "계란",
  "밥",
  "참기름",
  "버터",
  "쌀",
  "안심",
  "콩나물",
  "청포묵",
  "간장",
  "계란",
  "밥",
  "참기름",
  "버터",
  "쌀",
  "안심",
  "콩나물",
  "청포묵",
  "간장",
  "계란",
  "밥",
  "참기름",
  "버터",
];

const IngredientItem = styled.button`
  height: 37px;
  border: 1px solid #a9a9a9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: #a9a9a9;
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

const AllFrigeListContainer = styled.div`
  width: 100%;
  padding: 70px 23px 0px 23px;
  flex-wrap: wrap;
  display: flex;
  gap: 8px;
`;

function AllFrigeList() {
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );

  return (
    <AllFrigeListContainer>
      {data.map((item) =>
        selectedIngredient.indexOf(item) === -1 ? (
          <IngredientItem
            onClick={() => setSelectedIngredient((prev) => [...prev, item])}
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
        )
      )}
    </AllFrigeListContainer>
  );
}

export default AllFrigeList;
