import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>
            </footer>
        );
    };
};

export default Footer;