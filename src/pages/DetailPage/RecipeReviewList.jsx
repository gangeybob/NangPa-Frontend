import RecipeDetailItem from "./RecipeDetailItem";
import styled from "styled-components";

const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 25px 0px 0px 0px;
`;

const RecipeReviewPhotoSwiper = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`;

const RecipeReviewPhotoContainer = styled.div`
  height: 123px;
  width: 158px;
  overflow: hidden;
`;

const RecipeReviewPhoto = styled.img`
  object-fit: cover;
`;

const reviewMockData = [
  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },

  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },

  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },

  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },

  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },
  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },
  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },
  {
    src: "https://image.msscdn.net/images/goods_img/20220419/2499333/2499333_1_500.jpg",
  },
];

function RecipeReviewList() {
  return (
    <>
      <StyledText>다른 분들은 이렇게 만들었어요</StyledText>
      <RecipeReviewPhotoSwiper>
        {reviewMockData.map((item) => {
          return (
            <RecipeReviewPhotoContainer>
              <RecipeReviewPhoto src={item.src} />
            </RecipeReviewPhotoContainer>
          );
        })}
      </RecipeReviewPhotoSwiper>
    </>
  );
}

export default RecipeReviewList;
