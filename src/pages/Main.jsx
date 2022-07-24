import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Search } from "../assets/search.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Subtitle = styled.p`
  color: #a3a3a3;
  position: absolute;
  width: 209px;
  height: 20px;
  left: 29px;
  top: 276px;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  margin: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.p`
  position: absolute;
  width: 186px;
  height: 95px;
  left: 29px;
  top: 302px;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: -0.165px;
  white-space: pre-wrap;
  margin: 0;
`;

const SearchBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: #eaeaea;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 124px 15px 20px;
  gap: 8px;
  position: absolute;
  width: 317px;
  height: 52px;
  left: 29px;
  top: 419px;
  border-radius: 10px;
  margin: 0;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.165px;

  color: #a9a9a9;
`;

function Main() {
  return (
    <Container>
      <TitleWrapper>
        <Subtitle>건강과 지갑을 책임지는 냉장고 파먹기</Subtitle>
        <Title>냉장고를{"\n"}비워 볼까요?</Title>
      </TitleWrapper>
      <Link to={{ pathname: "/search" }}>
        <SearchBtn>
          <Search />
          재료를 선택해주세요
        </SearchBtn>
      </Link>
    </Container>
  );
}

export default Main;
