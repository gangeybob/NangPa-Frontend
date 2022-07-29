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

const RecipeReviewListContainer = styled.div`
  padding-bottom: 70px;
`;

const reviewMockData = [
  {
    id: 1,
    src: "https://i.pinimg.com/564x/fd/ef/df/fdefdf72005e565dc9a8abcabe4761a3.jpg",
  },

  {
    id: 2,
    src: "https://i.pinimg.com/564x/f8/49/6d/f8496d5213fed11a3b89ba50bade351e.jpg",
  },

  {
    id: 3,
    src: "https://i.pinimg.com/564x/9f/04/d6/9f04d68421dd61d102a75accb8f0b613.jpg",
  },

  {
    id: 4,
    src: "https://i.pinimg.com/564x/3a/92/d5/3a92d58a7baf4733bbb68ed3ec4f04b2.jpg",
  },

  {
    id: 5,
    src: "https://i.pinimg.com/564x/dc/53/67/dc53679ff5254bf074bcfd81e1c7c4a0.jpg",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/8d/fe/a0/8dfea0b5ef3ff6c567709518e31ae47b.jpg",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/564x/4b/fa/bb/4bfabb8e544f576ac90522d08a4f521c.jpg",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/564x/91/70/6a/91706acc3cce7f7ba6adbffffe893c84.jpg",
  },
];

function RecipeReviewList() {
  return (
    <RecipeReviewListContainer>
      <StyledText>다른 분들은 이렇게 만들었어요</StyledText>
      <RecipeReviewPhotoSwiper>
        {reviewMockData.map((item) => {
          return (
            <div>
              <RecipeReviewPhoto key={item.id} src={item.src} />
            </div>
          );
        })}
      </RecipeReviewPhotoSwiper>
    </RecipeReviewListContainer>
  );
}

export default RecipeReviewList;
