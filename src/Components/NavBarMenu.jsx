import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBarMenu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/">Dash Systems</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarColor01" />
            <Navbar.Collapse id="navbarColor01">
                <Nav className="me-auto">
                    <Nav.Link href="/#/nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="/#/servicios">Servicios</Nav.Link>
                    <Nav.Link href="/#/proximamente">Proximamente</Nav.Link>
                    <Nav.Link href="/#/contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarMenu;