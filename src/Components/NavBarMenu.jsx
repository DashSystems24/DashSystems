import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBarMenu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarColor01" />
            <Navbar.Collapse id="navbarColor01">
                <Nav className="me-auto">
                    <Nav.Link href="#" active>Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarMenu;