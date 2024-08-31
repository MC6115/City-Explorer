import React from "react";
import { Form, Button, Alert } from "react-bootstrap";

class CitySearch extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.porps.displayLatLon();
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="searchBar" controlId="cityName">
                    <Form.Label>Ingresa la dirección a explorar</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa dirección" onChange={this.props.displayLatLon}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Explora!
                </Button>
                {this.props.hasError &&
                    <>
                        <Alert key={danger} variant={danger}>
                            <strong>Error {''}</strong>
                            {this.props.errorMessage}, porfavor intenta nuevamente
                        </Alert>
                    </>
                }
            </Form>
        )
    };
};



export default CitySearch