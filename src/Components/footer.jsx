import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Row>
                    <Col xs={'4'}>
                        <div className="footerLogo" />
                    </Col>
                    <Col xs={'4'}>
                        <h4>Menu:</h4>
                        <ul>
                            <li>Nosotros</li>
                            <li>Servicios</li>
                            <li>Contacto</li>
                        </ul>
                    </Col>
                    <Col xs={'4'}>
                        <h4>Contacto</h4>
                        <p>Correo: dashsocial@dashsystemsmty.com</p>
                        <hr />
                        <h4>Redes</h4>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vel.</p>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Footer;