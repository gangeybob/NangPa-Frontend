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
];

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

function FrigeAllList() {
  const [selectedIngredient, setSelectedIngredient] = useRecoilState(
    selectedIngredientAtom
  );

  return (
    <>
      {data.map((item) =>
        selectedIngredient.indexOf(item) === -1 ? (
          <IngredientItem
            onClick={() => setSelectedIngredient((prev) => [...prev, item])}
          >
            {item}
          </IngredientItem>
        ) : (
          <SelectedIngredientItem
            onClick={() =>
              setSelectedIngredient((prev) =>
                [...prev].filter((element) => element !== item)
              )
            }
          >
            {item}
          </SelectedIngredientItem>
        )
      )}
    </>
  );

  //   {data.map((item) => {selectedIngredient.indexOf(item) === -1 ? (<IngredientItem
  //     onClick={() => setSelectedIngredient((prev) => [...prev, item])}><IngredientName>{item}</IngredientName></IngredientItem>
  // ) : (
  //   <SelectedIngredientItem
  //     onClick={() =>
  //       setSelectedIngredient((prev) =>
  //         [...prev].filter((element) => element !== item)
  //       )
  //     }
  //   >
  //     <IngredientName>{item}</IngredientName>
  //   </SelectedIngredientItem> })}
}

export default FrigeAllList;
