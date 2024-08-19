import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

const Contacto = () => {
    return (
        <div className="pageContact">
            <Row>
                <Col xs={6}>
                    <h4>Contactanos</h4>
                    <p>¡Ponte en contacto hoy!</p>
                    <hr />
                    <p>dashsocial@dashsystemsmty.com</p>
                    <p>88-11-22-33</p>
                </Col>
                <Col xs={6}>
                    <div className="formContact">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre o Empresa"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Raul | ServiciosRaul" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Correo electronico"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Numero de contacto"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="(81)11-22-233" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Descripción"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" placeholder="Descripción" />
                        </FloatingLabel>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Contacto;