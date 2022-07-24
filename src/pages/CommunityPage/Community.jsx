import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import CommunityCard from './CommunityCard';

function Community() {
    let res = this.state.users;
    let { isloading } = this.state;
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                            <ListGroup.Item>{isloading ? <ReactLoading type={'bars'} color='#021155' /> : <CommunityCard />}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Community;
