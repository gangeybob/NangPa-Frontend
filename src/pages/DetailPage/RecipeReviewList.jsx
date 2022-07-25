import styled from "styled-components";

const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 25px 23px 0px 23px;
`;

const RecipeReviewPhotoSwiper = styled.div`
  gap: 10px;
  display: flex;
  overflow-x: scroll;
  padding-left: 23px;
  margin: 12px 0px 16px 0px;
`;

const RecipeReviewPhoto = styled.img`
  height: 123px;
  width: 158px;
  object-fit: cover;
`;

const reviewMockData = [
  {
    src: "https://static.wtable.co.kr/image-resize/production/service/recipe/121/16x9/17715671-f763-4f85-ad7e-2b10097b77fb.jpg",
  },

  {
    src: "https://recipe1.ezmember.co.kr/cache/recipe/2018/12/12/6d6941d611d34c90c5dc19f4d67c857a1.jpg",
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
            <div>
              <RecipeReviewPhoto key={item.src} src={item.src} />
            </div>
          );
        })}
      </RecipeReviewPhotoSwiper>
    </>
  );
}

export default RecipeReviewList;
