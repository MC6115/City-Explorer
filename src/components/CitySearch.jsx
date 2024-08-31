import React from "react";
import { Form, Button } from "react-bootstrap";
// import { render } from "react-dom";

class CitySearch extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <Form>
                <Form.Group className="searchBar" controlId="cityName">
                    <Form.Label>Ingresa la dirección a explorar</Form.Label>
                    <Form.Control onChange="" type="text" placeholder="Ingresa dirección" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Explora!
                </Button>
            </Form>
        )
    };
};



export default CitySearch