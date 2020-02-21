import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Display = (props) => {
    return (
        <div>
            <h3>
                Display
            </h3>
            <br />
            <Container>
                <Row>
                    <Col>{props.left}</Col>
                    <Col>{props.middle}</Col>
                    <Col>{props.right}</Col>
                </Row>
               
            </Container>
        </div>
    )
}

export default Display;
