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
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="homeContainer">
                <Row className='justify-content-center'>
                    <Col xl={4} className='contLogo d-flex justify-content-xl-end justify-content-center'>
                        <img className='logo' src={LogoSloganChico} alt="Dash Systems Logo" />
                    </Col>
                    <Col xl={6} className='d-flex justify-content-center align-items-center'>
                        <div className="heroBox">
                            <h2>Da a conocer tu negocio, Agenda una consulta</h2>
                            <Link to={"/contacto"}><Button variant="outline-light">Contactanos</Button></Link>
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
                    <Col sm={12} xl={6} className="imgNosotros d-flex justify-content-xl-end justify-content-center">
                        <img src={NosotrosImg} alt="Foto de Tranmautritam: https://www.pexels.com/es-es/foto/escritorio-tecnologia-teclado-raton-326515/" />
                    </Col>
                    <Col xs={6} className='boxnosotros d-flex flex-column justify-content-center align-items-start'>
                        <div className="description">
                            <p>Somos una agencia de desarrollo dedicada a llevar tu negocio al siguiente nivel digital. Nos especializamos en crear aplicaciones web y móviles personalizadas, combinando diseño creativo con tecnología de vanguardia para impulsar tu marca y mejorar tu visibilidad en línea. Con un enfoque en calidad, innovación y colaboración constante, estamos aquí para transformar tus ideas en realidades digitales.</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="servicios">
                <Row>
                    <Col className='titleServ d-flex flex-column justify-content-center align-items-center'>
                        <h1>Nuestros Servicios</h1>
                        <br />
                        <p>En Dash Systems, cada proyecto es una oportunidad para innovar y transformar ideas en soluciones digitales. Nos enfocamos en desarrollar aplicaciones y sitios web que no solo cumplen con las necesidades de nuestros clientes, sino que también superan sus expectativas, con un compromiso inquebrantable hacia la calidad y la creatividad.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-xl-end justify-content-center'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={DiseñoUI} />
                            <Card.Body>
                                <Card.Title>Diseño UI</Card.Title>
                                <Card.Text>
                                    Nuestro enfoque en Diseño UI se centra en crear interfaces intuitivas y atractivas que mejoran la experiencia del usuario, garantizando que cada interacción con tu aplicación o sitio web sea fluida y memorable.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-xl-start justify-content-center'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={SitiosWeb} />
                            <Card.Body>
                                <Card.Title>Sitios web</Card.Title>
                                <Card.Text>
                                    Diseñamos y desarrollamos sitios web personalizados que combinan estética, funcionalidad y rendimiento, asegurando que tu presencia en línea sea impactante y efectiva para atraer y retener clientes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-xl-end justify-content-center'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={Posicionamiento} />
                            <Card.Body>
                                <Card.Title>Posicionamiento</Card.Title>
                                <Card.Text>
                                    Con nuestras estrategias de SEO y SEM, te ayudamos a mejorar tu visibilidad en los motores de búsqueda, asegurando que tu negocio alcance a más clientes potenciales y se destaque en un mercado competitivo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-xl-start justify-content-center'>
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={DesarrolloMedida} />
                            <Card.Body>
                                <Card.Title>Desarrollos a medida</Card.Title>
                                <Card.Text>
                                    En Dash Systems, creamos soluciones de diseño únicas y personalizadas, adaptadas a las necesidades específicas de tu negocio, para asegurar que tu marca se refleje de manera auténtica y poderosa.
                                </Card.Text>
                            </Card.Body>
                        </Card>
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
                    <Col xl={6} sm={12} className='d-flex justify-content-xl-end justify-content-xs-center'>
                        <Card className='top' style={{ width: '18rem' }}>
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
                    <Col xxl={6} sm={12} className='d-flex justify-content-xl-start justify-content-sm-center'>
                        <Card className='virtual' style={{ width: '18rem' }}>
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
                    <Col className=' d-flex justify-content-end'>
                        <Card className='cardTesti'>
                            <Card.Header>Equipos y Superficies de México</Card.Header>
                            <Card.Body>
                                <Card.Title><Link to="https://www.toppandscreedmx.com">Topp & Screed Mx</Link></Card.Title>
                                <Card.Text>
                                    Topp & Screed es nuestro proveedor, necesitabamos una pagina web sencilla para dar a conocer las maquinas a nuestros clientes, diseño dinamico e intuitivo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        <Card className='cardTesti'>
                            <Card.Header className='cardtittleTop'>Virtual Bifrost</Card.Header>
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