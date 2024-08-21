import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import LogoSloganChico from '../assets/Logo_Slogan_Grande.png';
import NosotrosImg from '../assets/nosotros.jpg';
import DiseñoUI from '../assets/DiseñoUI.jpg';
import SitiosWeb from '../assets/SitiosWeb.jpg';
import Posicionamiento from '../assets/Posicionamiento.jpg';
import DesarrolloMedida from '../assets/DesarrolloMedida.jpg';
import Topp from '../assets/Topp.png';
import Virtual from '../assets/Virtual.png';
import '../css/Home.css'

const Home = () => {
    return (
        <>
            <div className="homeContainer">
                <Row>
                    <Col xl={6} className='d-flex justify-content-center'>
                        <img className='logo' src={LogoSloganChico} alt="Dash Systems Logo" />
                    </Col>
                    <Col xl={6} className='d-flex align-items-center'>
                        <div className="heroBox">
                            <h2>Da a conocer tu negocio, Agenda una consulta</h2>
                            <Button variant="outline-light">Contactanos</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="nosotros">
                <Row>
                    <Col>
                        <h2 className='homeWeAre'>¿Quienes somos?</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className="imgNosotros">
                        <img src={NosotrosImg} alt="Foto de Tranmautritam: https://www.pexels.com/es-es/foto/escritorio-tecnologia-teclado-raton-326515/" />
                    </Col>
                    <Col xs={6} className='d-flex flex-column justify-content-center align-items-center'>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita reprehenderit nisi! Expedita odio magnam voluptas cupiditate esse reiciendis optio illo architecto ipsum asperiores voluptatem fugiat, accusamus reprehenderit dolorem alias? Reprehenderit ut quidem consectetur sed possimus, cumque tempore unde illum sit dolor accusantium cupiditate voluptatem.</p>
                        </div>
                        <Button variant="outline-info">Ver mas</Button>
                    </Col>
                </Row>
            </div>
            <div className="servicios">
                <Row>
                    <Col className='titleServ d-flex flex-column justify-content-center align-items-center'>
                        <h1>Nuestros Servicios</h1>
                        <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eaque dolorum doloribus, reiciendis adipisci minus sint consectetur et iste aliquam dolores animi odit. Iure dolores corrupti aut soluta odio illum distinctio explicabo nihil, animi delectus?</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-end'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={DiseñoUI} />
                            <Card.Body>
                                <Card.Title>Diseño UI</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={SitiosWeb} />
                            <Card.Body>
                                <Card.Title>Sitios web</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-end'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={Posicionamiento} />
                            <Card.Body>
                                <Card.Title>Posicionamiento</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={DesarrolloMedida} />
                            <Card.Body>
                                <Card.Title>Desarrollos a medida</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='btnServ' variant="outline-light">Light</Button>
                    </Col>
                </Row>
            </div>
            <div className="portfolio">
                <Row>
                    <Col className='titlePortfolio d-flex flex-column  align-items-center'>
                        <h2>Nuestros Proyectos</h2>
                        <p>trabajamos con la metodologia scrum que nos permite asignar tiempos con nuestro equipo de trabajo para el desarrollo, diseño y posicionamiento de cada uno de los proyectos, utilizando las mejores tecnologías para dar diseños unicos y a la vanguardia.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Topp} />
                            <Card.Body>
                                <Card.Title>Topp & Screed Mx</Card.Title>
                                <Card.Text>
                                    Pagina web estática de nuestro cliente Equipos y Superficies de México.

                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Diseño personalizado</ListGroup.Item>
                                <ListGroup.Item>Creado con React</ListGroup.Item>
                                <ListGroup.Item>Domio y Hosting incluidos, terminado</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Virtual} />
                            <Card.Body>
                                <Card.Title>Virtual Bifrost</Card.Title>
                                <Card.Text>
                                    Sitio web con blog, dinamico e iteractivo de nuestro cliente Virtual Bifrost.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Diseño Personalizado</ListGroup.Item>
                                <ListGroup.Item>Creado con, HTML, CSS, JavaScript, PHP y gestionado con Wordpress</ListGroup.Item>
                                <ListGroup.Item>Actualmente en proceso</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="testimonios">
                <Row>
                    <Col>
                        <h2>Lo que dicen nuestros clientes</h2>
                        <p>Conoce los comentarios de nuestros clientes:</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Card>
                            <Card.Header>Equipos y Superficies de México</Card.Header>
                            <Card.Body>
                                <Card.Title>Pagina: Topp & Screed Mx</Card.Title>
                                <Card.Text>
                                    Topp & Screed es nuestro proveedor, necesitabamos una pagina web sencilla para dar a conocer las maquinas a nuestros clientes, diseño dinamico e intuitivo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card>
                            <Card.Header>Virtual Bifrost</Card.Header>
                            <Card.Body>
                                <Card.Title>Sitio Web Creativo</Card.Title>
                                <Card.Text>
                                    El proceso que tuvimos para desarrollar el desarrollo del sitio web fue rapido y eficiente, entendieron el concepto que queremos dar a conocer a nuestros clientes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Home;