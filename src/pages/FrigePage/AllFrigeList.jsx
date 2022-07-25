import { useRecoilState } from "recoil";
import styled from "styled-components";
import { myFrigeAtom, selectedIngredientAtom } from "../../atom";

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
  padding: 30px 28px 30px 28px;
  flex-wrap: wrap;
  display: flex;
  gap: 8px;
  overflow-y: scroll;
  height: 480px;
`;

function AllFrigeList({ irdnt }) {
  const [myFrige, setMyFrige] = useRecoilState(myFrigeAtom);

  return (
    <AllFrigeListContainer>
      {irdnt.map((item) =>
        myFrige.indexOf(item.title) === -1 ? (
          <IngredientItem
            onClick={() => setMyFrige((prev) => [...prev, item.title])}
          >
            <IngredientName>{item.title}</IngredientName>
          </IngredientItem>
        ) : (
          <SelectedIngredientItem
            onClick={() =>
              setMyFrige((prev) =>
                [...prev].filter((element) => element !== item.title)
              )
            }
          >
            <IngredientName>{item.title}</IngredientName>
          </SelectedIngredientItem>
        )
      )}
    </AllFrigeListContainer>
  );
}

export default AllFrigeList;
