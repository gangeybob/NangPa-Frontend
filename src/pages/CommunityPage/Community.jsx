import React, { useState } from 'react';
import { Container, Card, ListGroupItem, ListGroup, Row, Col, ButtonGroup, ToggleButton, Nav, Modal } from 'react-bootstrap';
import LikeButton from './LikeButton';
import styled from 'styled-components';
import './community.css';

const HeaderWrap = styled.section`
    display: flex;
`;

const HeaderContainer = styled.header`
    font-family: 'SUIT';
    font-style: normal;
    letter-spacing: -0.165px;
`;

const HeaderTitle = styled.h1`
    margin-top: 14px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 23px;
    line-height: 29px;
`;

const HeaderDescription = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #a6a6a6;
`;

const StyledLink = styled(Nav.Link)`
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin-top: 19px;
    margin-left: auto;
`;

const ReviewIcon = styled.i`
    display: inline-block;
    width: 17px;
    height: 17px;
    background-image: url("data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75V17.25ZM17.5 18.75C17.9142 18.75 18.25 18.4142 18.25 18C18.25 17.5858 17.9142 17.25 17.5 17.25V18.75ZM1 18H0.25C0.25 18.4142 0.585786 18.75 1 18.75L1 18ZM1 14L0.46967 13.4697C0.329018 13.6103 0.25 13.8011 0.25 14H1ZM14 1L14.5303 0.46967C14.2374 0.176777 13.7626 0.176777 13.4697 0.46967L14 1ZM18 5L18.5303 5.53033C18.8232 5.23744 18.8232 4.76256 18.5303 4.46967L18 5ZM5 18V18.75C5.19891 18.75 5.38968 18.671 5.53033 18.5303L5 18ZM9 18.75H17.5V17.25H9V18.75ZM1.75 18V14H0.25V18H1.75ZM13.4697 1.53033L17.4697 5.53033L18.5303 4.46967L14.5303 0.46967L13.4697 1.53033ZM5 17.25H1V18.75H5V17.25ZM17.4697 4.46967L14.4697 7.46967L15.5303 8.53033L18.5303 5.53033L17.4697 4.46967ZM14.4697 7.46967L4.46967 17.4697L5.53033 18.5303L15.5303 8.53033L14.4697 7.46967ZM1.53033 14.5303L11.5303 4.53033L10.4697 3.46967L0.46967 13.4697L1.53033 14.5303ZM11.5303 4.53033L14.5303 1.53033L13.4697 0.46967L10.4697 3.46967L11.5303 4.53033ZM15.5303 7.46967L11.5303 3.46967L10.4697 4.53033L14.4697 8.53033L15.5303 7.46967Z' fill='black'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
`;

const ScrollWrap = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    width: calc(100% + 4px);
    display: flex;
    height: 31px;
    margin-bottom: 22px;
    margin-left: -4px;
    padding-right: 20px;
    flex-wrap: nowrap;
    
    &::-webkit-scrollbar{ display:none; }
`;

const StyledButton = styled(Nav.Link)`
    min-width: 75px;
    display: inline-block;
    padding: 7px 15px;
    margin-left: 4px;
    margin-right: 4px;
    line-height: 120%;
    background-color: #2e8cfe;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.03em;
    color: #fff;
    text-align: center;

    &:focus,
    &:hover {
        color: #fff;
    }
`;

const MetaWrap = styled.div`
    display: flex;
    align-items: center;
    justyify-content: space-between;
    width: 100%;
`;

const ShareGroup = styled.div`
    margin-left: auto;
`;

function Community() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cardInfo = [
        {
            id: 1,
            image: 'https://i.pinimg.com/564x/fd/ef/df/fdefdf72005e565dc9a8abcabe4761a3.jpg',
            title: '카망베르 치즈 돈까스',
            keyword: '돈까스',
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/564x/f8/49/6d/f8496d5213fed11a3b89ba50bade351e.jpg',
            title: '꿀떡꿀떡 맛나는 - 간장꿀컵떡볶이',
            keyword: '떡복이',
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/564x/9f/04/d6/9f04d68421dd61d102a75accb8f0b613.jpg',
            title: '간식으로 식빵 핫도그 만들었는데 맥주 안주로도 잘 어울려요~',
            keyword: '핫도그',
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/564x/3a/92/d5/3a92d58a7baf4733bbb68ed3ec4f04b2.jpg',
            title: '봄소풍,봄나들이 플라워 계란후라이 도시락~*',
            keyword: '도시락',
        },
        {
            id: 5,
            image: 'https://i.pinimg.com/564x/dc/53/67/dc53679ff5254bf074bcfd81e1c7c4a0.jpg',
            title: '토마토라면@ 권오중셰프의 이색방토라면레시피',
            keyword: '토마토',
        },
        {
            id: 6,
            image: 'https://i.pinimg.com/736x/8d/fe/a0/8dfea0b5ef3ff6c567709518e31ae47b.jpg',
            title: '치킨너겟으로 간편하게 간장치킨 만들기',
            keyword: '치킨',
        },
        {
            id: 7,
            image: 'https://i.pinimg.com/564x/4b/fa/bb/4bfabb8e544f576ac90522d08a4f521c.jpg',
            title: '감자로 뚝딱 만들어내는 아이들간식~감자채피자',
            keyword: '피자',
        },
        {
            id: 8,
            image: 'https://i.pinimg.com/564x/91/70/6a/91706acc3cce7f7ba6adbffffe893c84.jpg',
            title: '팽이버섯말이 만들기 실패없는 베이컨말이 레시피',
            keyword: '베이컨',
        },
        {
            id: 9,
            image: 'https://i.pinimg.com/564x/6d/32/d6/6d32d6728bd61f41699998f17d6deb44.jpg',
            title: '머랭 팬케이크 만들기',
            keyword: '케이크',
        },
        {
            id: 10,
            image: 'https://i.pinimg.com/564x/98/13/48/98134850274fee8ec072abea2a2309e5.jpg',
            title: '두반장이 필요없다! 쉽고~ 맛있는 마파두부/ 마파두부덮밥 레시피 공개!',
            keyword: '두반장',
        },
    ];

    const renderCard = (card, index) => {
        return (
            <ListGroupItem>
                <Card key={index}>
                    <Card.Img variant='top' src={card.image} />
                    <Card.Body>
                        <Card.Text>
                            <LikeButton />
                            <MetaWrap>
                                <ShareGroup>
                                    <ButtonGroup className='btn-bookmark'>
                                        <ToggleButton id='toggle-check' type='checkbox' />
                                    </ButtonGroup>
                                    <ButtonGroup className='btn-share'>
                                        <ToggleButton id='toggle-check' type='checkbox' />
                                    </ButtonGroup>
                                </ShareGroup>
                            </MetaWrap>
                        </Card.Text>
                        <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
                </Card>
            </ListGroupItem>
        );
    };

    return (
        <Container className='community-wrap'>
            <Row>
                <Col xs='12'>
                    <HeaderWrap>
                        <HeaderContainer>
                            <HeaderTitle>
                                내가 만든 음식
                                <br />
                                자랑해봐요 👀
                            </HeaderTitle>
                            <HeaderDescription>인기 많은 키워드</HeaderDescription>
                        </HeaderContainer>
                        <StyledLink to='/' onClick={handleShow}>
                            <ReviewIcon />
                        </StyledLink>
                    </HeaderWrap>
                    <ScrollWrap>
                        {cardInfo.map((cat, i) => {
                            return <StyledButton>{cat.keyword}</StyledButton>;
                        })}
                    </ScrollWrap>
                    <ListGroup className='community-list'>{cardInfo.map(renderCard)}</ListGroup>
                </Col>
            </Row>
            <Modal show={show} size='lg' centered onHide={handleClose} className='error-modal'>
                <Modal.Header>
                    <Modal.Title>서비스 준비 중입니다</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    보다 나은 서비스를 위하여 서비스 준비 중에 있습니다.
                    <br />
                    빠른 시일 내에 준비하여 찾아뵙겠습니다.
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Community;
