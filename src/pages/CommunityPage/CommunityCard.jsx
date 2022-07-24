import React from 'react';
import { Card } from 'react-bootstrap';

function CommunityCard() {
    return (
        <>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/564x/09/69/c4/0969c4565b0ef8c75ca26a4b000466f6.jpg' />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CommunityCard;
