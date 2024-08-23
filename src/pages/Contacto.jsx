import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import '../css/Contacto.css'
import axios from "axios";

const Contacto = () => {

    const [formData, setFormData] = useState({
        name: '',
        website: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form instanceof HTMLFormElement) {
            try {
                const formData = new FormData(form);
                const response = await axios.post('http://localhost/php/sendemail.php', formData);
                alert(response.data.message);
                setFormData({
                    name: '',
                    email: '',
                    website: '',
                    phone: '',
                    message: '',
                });
            } catch (error) {
                console.error('Error enviando el formulario:', error);
                alert('Hubo un error enviando el formulario');
            }
        } else {
            console.error('El evento no se originó a partir de un formulario.');
        }
    };

    return (
        <>

            <div className="tittle">
                <h1>Contaco</h1>
            </div>
            <div className="pageContact">
                <Row>
                    <Col xs={6} className="d-flex justify-content-center">
                        <div className="boxContacto">
                            <h4>Contactanos</h4>
                            <p>¡Ponte en contacto hoy!</p>
                            <hr />
                            <p>daniandrade@dashsystemsmty.com</p>
                            <p>carvizu@dashsystemsmty.com</p>
                            <p>(81)-2337-4469</p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <form onSubmit={handleSubmit}>
                            <div className="formContact">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Nombre o Empresa"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Raul | ServiciosRaul" name="name" value={formData.name} onChange={handleChange} />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Correo electronico"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Numero de contacto"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="(81)11-22-233" name="phone" value={formData.phone} onChange={handleChange} />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Descripción"
                                    className="mb-3"
                                >
                                    <Form.Control as="textarea" placeholder="Descripción" name="message" value={formData.message} onChange={handleChange} />
                                </FloatingLabel>
                                <button type="submit" className="btn btn-primary">Enviar</button>

                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Contacto;