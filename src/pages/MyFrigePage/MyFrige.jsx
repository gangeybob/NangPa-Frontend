import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { myFrigeAtom, currentPageAtom } from "../../atom";

const MyFrigeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0px 27px;
`;

const MyFrigeSubtitle = styled.p`
  white-space: pre-wrap;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  letter-spacing: -0.03em;

  color: #a3a3a3;
  margin: 0;
  margin-top: 73px;
`;

const MyFrigeTitle = styled.p`
  font-weight: 600;
  font-size: 23px;
  line-height: 29px;
  margin: 0;
  margin-bottom: 13px;
  letter-spacing: -0.165px;
`;

const MyFrigeListContainer = styled.div`
  background: rgba(46, 140, 254, 0.06);
  border-radius: 10px;
  width: 100%;
  height: 540px;
  padding: 20px 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: scroll;
  align-content: flex-start;
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

const SelectionCompleteBtn = styled.button`
  z-index: 99;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 85px;
  background: #2e8cfe;
  border-radius: 10px;
  width: 328px;
  height: 46px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  width: 320px;
  height: 58px;

  box-shadow: 0px 3px 10px #a9d0ff;

  &:disabled {
    background: #a9a9a9;
    box-shadow: 0px 3px 10px #a0a0a0;
  }
`;

const FrigeGradient = styled.div`
  z-index: 2;
  width: 100%;
  height: 170px;
  position: fixed;
  bottom: 64px;
  background: linear-gradient(
    181.02deg,
    rgba(255, 255, 255, 0) 13.62%,
    #ffffff 55.49%
  );
`;
function MyFrige() {
  const [myFrige, setMyFrigeAtom] = useRecoilState(myFrigeAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  useEffect(() => {
    setCurrentPage("frige");
  }, []);
  return (
    <MyFrigeContainer>
      <MyFrigeSubtitle>
        오래된 재료는 비워지고{"\n"}행복은 채워질
      </MyFrigeSubtitle>
      <MyFrigeTitle>셰프의 냉장고 ❄️</MyFrigeTitle>
      <MyFrigeListContainer>
        {myFrige.map((item) => (
          <MyFrigeItem>
            <MyFrigeName>{item}</MyFrigeName>
          </MyFrigeItem>
        ))}
      </MyFrigeListContainer>

      <Link to={{ pathname: "/frige" }}>
        <SelectionCompleteBtn>냉장고 설정 다시하기</SelectionCompleteBtn>
      </Link>
      <FrigeGradient />
    </MyFrigeContainer>
  );
}

export default MyFrige;
