import axios from "axios";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CitySearch from "./CitySearch";
import LatLon from "./LatLon";
import Map from "./Map";
import Map from "./Map";

const API_KEY = import.meta.env.VITE_API_KEY

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            location: '',
            latitud: '',
            longitud: '',
            displayMap: false,
            displayError: false,
            errorMessage: '',
        };
    };

    updateCity = (e) => {
        this.setState({ searchQuery: e.target.value });
    };
    displayLatLon = async () => {
        const url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`
        let location;
        try {
            location = await axios.get(url);
            this.setState({
                location: location.data[0].display_name,
                latitud: location.data[0].lat,
                longitud: location.data[0].lon,
                displayMap: true,
                displayError: false,
            });
        } catch (error) {
            this.setState({
                displayMap: false,
                displayError: true,
                errorMessage: error.response.status + ':' + error.response.data.error
            });
        };
    };
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <CitySearch updateCity={this.state.updateCity} displayLatLon={this.state.displayLatLon} hasError={this.state.displayError} errorMessage={this.state.errorMessage} />
                    </Col>
                </Row>
                {this.state.displayMap &&
                    <>
                        <Row>
                            <Col>
                                <LatLon city={this.state.location} lat={this.state.latitud} lon={this.state.longitud} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Map img_url={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${this.state.latitud},${this.state.longitud}&zoom=12&size=600x400&format=jpg&maptype=streets`} city={this.state.location}/>
                            </Col>
                        </Row>
                    </> 
                }
            </Container>
        );
    };
};

export default Explorer