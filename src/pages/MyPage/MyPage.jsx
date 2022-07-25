import React, { useState } from 'react';
import { Row, Col, Container, Figure, Button, Modal } from 'react-bootstrap';

import styled from 'styled-components';
import './mypage.css';

const ProfileWrap = styled.div`
    position: relative;
    margin-top: 45px;
    margin-bottom: 21px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
`;

const UserAccount = styled.strong`
    display: inline-flex;
    margin-bottom: 2px;
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.05em;
    color: #232323;
`;

const UserProfile = styled.h2`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 94px;
    height: 94px;
    margin-top: 14px;
    margin-bottom: 4px;
    border-radius: 50%;
    background: #dad9d9;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 26.67px;
        height: 30px;
        background-image: url("data:image/svg+xml,%3Csvg width='29' height='32' viewBox='0 0 29 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M27.6667 31V31.75C28.0809 31.75 28.4167 31.4142 28.4167 31H27.6667ZM1 31H0.25C0.25 31.4142 0.585786 31.75 1 31.75L1 31ZM7.66667 21.75H21V20.25H7.66667V21.75ZM26.9167 27.6667V31H28.4167V27.6667H26.9167ZM1.75 31V27.6667H0.25V31H1.75ZM21 21.75C24.2677 21.75 26.9167 24.399 26.9167 27.6667H28.4167C28.4167 23.5706 25.0961 20.25 21 20.25V21.75ZM7.66667 20.25C3.57055 20.25 0.25 23.5706 0.25 27.6667H1.75C1.75 24.399 4.39898 21.75 7.66667 21.75V20.25ZM20.25 7.66667C20.25 10.9344 17.601 13.5833 14.3333 13.5833V15.0833C18.4294 15.0833 21.75 11.7628 21.75 7.66667H20.25ZM14.3333 13.5833C11.0656 13.5833 8.41667 10.9344 8.41667 7.66667H6.91667C6.91667 11.7628 10.2372 15.0833 14.3333 15.0833V13.5833ZM8.41667 7.66667C8.41667 4.39898 11.0656 1.75 14.3333 1.75V0.25C10.2372 0.25 6.91667 3.57055 6.91667 7.66667H8.41667ZM14.3333 1.75C17.601 1.75 20.25 4.39898 20.25 7.66667H21.75C21.75 3.57055 18.4294 0.25 14.3333 0.25V1.75ZM1 31.75H27.6667V30.25H1V31.75Z' fill='white'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 26.67px 30px;
        transform: translate(-50%, -50%);
    }
`;

const UserButtonGroup = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Wrapping = styled.div`
    margin: -9px;
`;

function MyPage(props) {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);

    return (
        <Container className='container mypage-wrap min-vh-100'>
            <Row xs={12} className='d-flex flex-column'>
                <Col xs={12}>
                    <ProfileWrap>
                        <Figure className='d-flex flex-column align-items-center justify-content-center'>
                            <UserProfile>{/* <Figure.Image width={94} height={94} alt='' src='/' /> */}</UserProfile>
                            <Figure.Caption className='d-flex flex-column align-items-center justify-content-center profile-info-wrap'>
                                <UserAccount>User12345</UserAccount>
                                고독한 다이어터
                            </Figure.Caption>
                        </Figure>
                        {/* TODO: 버튼 영역 역할애 따랄 label 값 변경 해주어야 함 */}
                        <UserButtonGroup>
                            <Button className='btn-profile'>안 매운 음식</Button>
                            <Button className='btn-profile'>안 매운 음식</Button>
                            <Button className='btn-profile'>안 매운 음식</Button>
                        </UserButtonGroup>
                    </ProfileWrap>
                    <Wrapping className='d-flex flex-wrap'>
                        {/* TODO : link 로 가야되나 지금은 그냥.... modal 그냥 띄어주려고 react-bootstrap의 button */}
                        <Button variant='white' onClick={handleShow} className='btn-error-modal w-50 h-100 link-mypage1'>
                            내가 받은
                            <br />
                            뱃지
                        </Button>
                        <Button variant='white' className='btn-error-modal w-50 h-100  link-mypage2'>
                            냉파
                            <br />
                            달력
                        </Button>
                        <Button variant='white' onClick={handleShow} className='btn-error-modal w-50 h-100  link-mypage3'>
                            저장한
                            <br />
                            레시피
                        </Button>
                        <Button variant='white' className='btn-error-modal w-50 h-100 link-mypage4'>
                            내가 만든
                            <br />
                            레시피
                        </Button>
                    </Wrapping>
                </Col>
            </Row>
            <Modal show={show} {...props} size='lg' centered className='error-modal'>
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

export default MyPage;
