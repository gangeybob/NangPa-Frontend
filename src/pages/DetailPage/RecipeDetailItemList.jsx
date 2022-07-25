import RecipeDetailItem from "./RecipeDetailItem";
import styled from "styled-components";

const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 25px 0px 0px 0px;
`;

function RecipeDetailItemList() {
  const mockdata = [
    {
      description: "1. 계란을 굽는다.",
      src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
    },

    {
      description: "2. 밥을 짓는다.",
      src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
    },

    {
      description: "3. 참기름을 넣는다.",
      src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
    },
    {
      description: "4. 비빈다",
    },
  ];

  return (
    <>
      <StyledText>레시피</StyledText>
      {mockdata.map((item) => {
        return (
          <RecipeDetailItem description={item.description} src={item.src} />
        );
      })}
    </>
  );
}

export default RecipeDetailItemList;
