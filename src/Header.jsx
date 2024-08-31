import React from "react";
import { Navbar } from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar expand="lg">
                    <h1>Explora ciudades</h1>
                    <p>Aquí podrás ...</p>
                </Navbar>
            </header>
        );
    };
};

export default Header