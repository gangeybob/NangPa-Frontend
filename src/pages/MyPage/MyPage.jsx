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
`;

const UserButtonGroup = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Wrapping = styled.div``;

function MyPage(props) {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);

    return (
        <Container className='container mypage-wrap min-vh-100'>
            <Row xs={12} className='d-flex flex-column'>
                <Col xs={12}>
                    <ProfileWrap>
                        <Figure className='d-flex flex-column align-items-center justify-content-center'>
                            <UserProfile>
                                <Figure.Image width={94} height={94} alt='' src='/' />
                            </UserProfile>
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
                </Col>
                <Col xs={12}>
                    <Wrapping className='d-flex flex-wrap align-items-center justify-content-xxl-start'>
                        {/* TODO : link 로 가야되나 지금은 그냥.... modal 그냥 띄어주려고 react-bootstrap의 button */}
                        <Button variant='white' onClick={handleShow} className='btn-error-modal w-50 h-100'>
                            냉파
                            <br />
                            달력
                        </Button>
                        <Button variant='white' className='btn-error-modal w-50 h-100'>
                            냉파
                            <br />
                            달력
                        </Button>
                    </Wrapping>
                    <Wrapping className='d-flex flex-wrap align-items-center justify-content-xxl-start'>
                        {/* TODO : link 로 가야되나 지금은 그냥.... modal 그냥 띄어주려고 react-bootstrap의 button */}
                        <Button variant='white' onClick={handleShow} className='btn-error-modal w-50 h-100'>
                            냉파
                            <br />
                            달력
                        </Button>
                        <Button variant='white' className='btn-error-modal w-50 h-100'>
                            냉파
                            <br />
                            달력
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
