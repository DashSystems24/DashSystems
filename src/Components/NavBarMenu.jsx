import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/NavBarMenu.css'

const NavBarMenu = () => {
    return (
        <Navbar className='mt-15' variant="dark" expand="lg">
            <Navbar.Brand href="/">Dash Systems</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarColor01" />
            <Navbar.Collapse id="navbarColor01">
                <Nav>
                    <Nav.Link as={Link} to={"/"} >Inicio</Nav.Link>
                    <Nav.Link as={Link} to={"/nosotros"} >Nosotros</Nav.Link>
                    <Nav.Link as={Link} to={"/servicios"}>Servicios</Nav.Link>
                    <Nav.Link as={Link} to={"/proximamente"}>Proximamente</Nav.Link>
                    <Nav.Link as={Link} to={"/contacto"}>Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarMenu;