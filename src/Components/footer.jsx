import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Row>
                    <Col xs={'4'} className='d-flex justify-content-center'>
                        <div className="logo">
                            <div className="imgLogo" />
                        </div>
                    </Col>
                    <Col xs={'4'}>
                        <div className="menuFooter">
                            <h4>Menu</h4>
                            <hr />
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/nosotros">Nosotros</Link></li>
                                <li><Link to="/servicios">Servicios</Link></li>
                                <li><Link to="/proximamente">Proximamente</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={'4'}>
                        <div className="footerContacto">
                            <h4>Contacto</h4>
                            <p>Correo: dashsocial@dashsystemsmty.com</p>
                            <hr />
                            <h4>Redes</h4>
                            <div className='footerRedes'>
                                <Link to="https://www.facebook.com/profile.php?id=61564302594233"><FaFacebook /></Link>
                                <Link to="https://www.instagram.com/dash_systems/"><FaInstagram /></Link>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Consulta los terminos y condiciones de nuestra pagina. Haz click aqui.</p>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Footer;