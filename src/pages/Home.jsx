import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div className="container">
                <Row>
                    <Col xs={6}>
                        <div className="logo" />
                    </Col>
                    <Col xs={6}>
                        <div className="heroBox">
                            <h1>Agenda una consulta</h1>
                            <Button variant="outline-light">Light</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="nosotros">
                <Row>
                    <Col>
                        <h2>Quienes somos?</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="imgNosotros" />
                    </Col>
                    <Col xs={6}>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita reprehenderit nisi! Expedita odio magnam voluptas cupiditate esse reiciendis optio illo architecto ipsum asperiores voluptatem fugiat, accusamus reprehenderit dolorem alias? Reprehenderit ut quidem consectetur sed possimus, cumque tempore unde illum sit dolor accusantium cupiditate voluptatem.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-info">Ver mas</Button>
                    </Col>
                </Row>
            </div>
            <div className="servicios">
                <Row>
                    <Col>
                        <h1>Nuestros Servicios</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eaque dolorum doloribus, reiciendis adipisci minus sint consectetur et iste aliquam dolores animi odit. Iure dolores corrupti aut soluta odio illum distinctio explicabo nihil, animi delectus?</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="portfolio">
                <Row>
                    <Col>
                        <h2>Nuestros Proyectos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum, illum at magnam dolores ipsum repellat porro officia, velit harum sapiente! Soluta itaque unde ad, rerum modi dolorum? Aut, tempora!</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={'6'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Topp & Screed Mx</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's co ntent.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={'6'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Virtual Bifrost</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="testimonios">
                <Row>
                    <Col>
                        <h2>Lo que dicen nuestros clientes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam beatae iure nobis temporibus molestias perferendis veritatis exercitationem. Eaque aliquam quaerat atque, et harum rem veritatis? Voluptate beatae fugit voluptatem perspiciatis?</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Equipos y Superficies de México</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Virtual Bifrost</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
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