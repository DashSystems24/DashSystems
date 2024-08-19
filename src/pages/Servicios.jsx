import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Servicios = () => {
    return (
        <>
            <div className="tittleServ">
                <Row>
                    <Col>
                        <h1>Servicios</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic exercitationem tempora, laborum id sit alias? Nulla magni tempore ea eius, corrupti in impedit exercitationem!</p>
                    </Col>
                </Row>
            </div>
            <div className="listServices">
                <Row>
                    <Col xs={6}>
                        <div className="imgServ" />
                    </Col>
                    <Col xs={6}>
                        <h3>Desarrollo Web</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero laborum repellendus adipisci aperiam hic, ea veritatis error deleniti impedit aliquam cupiditate odio nihil atque quod voluptatem, quo necessitatibus fugiat ex exercitationem voluptas non? Earum veniam suscipit totam alias hic dolore facilis? Fugiat, sint ullam.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="imgServ" />
                    </Col>
                    <Col xs={6}>
                        <h3>Desarrollo Movil</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero laborum repellendus adipisci aperiam hic, ea veritatis error deleniti impedit aliquam cupiditate odio nihil atque quod voluptatem, quo necessitatibus fugiat ex exercitationem voluptas non? Earum veniam suscipit totam alias hic dolore facilis? Fugiat, sint ullam.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="imgServ" />
                    </Col>
                    <Col xs={6}>
                        <h3>Desarrollo Propio</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero laborum repellendus adipisci aperiam hic, ea veritatis error deleniti impedit aliquam cupiditate odio nihil atque quod voluptatem, quo necessitatibus fugiat ex exercitationem voluptas non? Earum veniam suscipit totam alias hic dolore facilis? Fugiat, sint ullam.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="imgServ" />
                    </Col>
                    <Col xs={6}>
                        <h3>Posicionamiento</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero laborum repellendus adipisci aperiam hic, ea veritatis error deleniti impedit aliquam cupiditate odio nihil atque quod voluptatem, quo necessitatibus fugiat ex exercitationem voluptas non? Earum veniam suscipit totam alias hic dolore facilis? Fugiat, sint ullam.</p>
                    </Col>
                </Row>
            </div>
            <div className="propuestas">
                <Row>
                    <Col xs={4}>
                        <div className="cardProp">
                            <h2>Titulo Propuestas</h2>
                            <h3>precio</h3>
                            <h4>Contiene:</h4>
                            <ul>
                                <ol>Cosa 1</ol>
                                <ol>Cosa 2</ol>
                                <ol>Cosa 3</ol>
                                <ol>Cosa 4</ol>
                            </ul>
                            <Button variant="success">Solicita</Button>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="cardProp">
                            <h2>Titulo Propuestas</h2>
                            <h3>precio</h3>
                            <h4>Contiene:</h4>
                            <ul>
                                <ol>Cosa 1</ol>
                                <ol>Cosa 2</ol>
                                <ol>Cosa 3</ol>
                                <ol>Cosa 4</ol>
                            </ul>
                            <Button variant="success">Solicita</Button>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="cardProp">
                            <h2>Titulo Propuestas</h2>
                            <h3>precio</h3>
                            <h4>Contiene:</h4>
                            <ul>
                                <ol>Cosa 1</ol>
                                <ol>Cosa 2</ol>
                                <ol>Cosa 3</ol>
                                <ol>Cosa 4</ol>
                            </ul>
                            <Button variant="success">Solicita</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="propuesta">
                            <h2>Titulo Propuestas</h2>
                            <h3>precio</h3>
                            <h4>Contiene:</h4>
                            <ul>
                                <ol>Cosa 1</ol>
                                <ol>Cosa 2</ol>
                                <ol>Cosa 3</ol>
                                <ol>Cosa 4</ol>
                            </ul>
                            <Button variant="outline-dark">Solicita tu cotizacion</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Servicios;