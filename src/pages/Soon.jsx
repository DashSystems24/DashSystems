import React from "react";
import { Col, Row } from "react-bootstrap";

const Soon = () => {
    return (
        <>
            <div className="backgroundSoon">
                <Row>
                    <Col>
                        <div className="firstNew">
                            <h1>¡Algo increíble está en camino!</h1>
                            <p>Estamos en pleno proceso de mejorar nuestra página web para ofrecerte una experiencia aún más atractiva e interactiva. Pronto podrás disfrutar de un nuevo diseño innovador, pensado para facilitar tu navegación y hacer de tu visita algo memorable. Además, lanzaremos un blog donde encontrarás las últimas noticias sobre tecnología y desarrollo web, manteniéndote siempre informado. <br />Pero eso no es todo: estamos desarrollando un exclusivo apartado de login para nuestros clientes, donde podrás seguir de cerca el progreso de los proyectos que has contratado con nosotros. Desde la actualización más pequeña, como un cambio de texto, hasta modificaciones más grandes, tendrás acceso a todo lo que necesites saber.</p>
                        </div>
                        <div className="waiting">
                            <h2>¿Qué puedes esperar?</h2>
                            <ul>
                                <ol>Un nuevo diseño inoovador</ol>
                                <ol>Blog donde encontrarás las últimas noticias sobre tecnología y desarrollo web</ol>
                                <ol>Un exclusivo apartado de login para nuestros clientes</ol>
                            </ul>
                        </div>

                        <p>¡No te lo pierdas! Mantente al tanto y prepárate para descubrir lo que tenemos reservado para ti.</p>
                    </Col>
                </Row>
            </div>
            <div className="newDesign">
                <Row>
                    <Col>
                        <h2>Diseño Innovador</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="imgnewDesign" />
                    </Col>
                    <Col xs={6}>
                        <h3>Diseño Animado e Interactivo</h3>
                        <p>Estamos desarrollando una pagina web, donde puedas interactuar con la informacion, conocer nuestros proyectos, nuestras metodologías y sus animaciones, porque nuestro segundo lema es "Si lo puedes imaginar, lo puedes crear"</p>
                    </Col>
                </Row>
            </div>
            <div className="newBlog">
                <Row>
                    <Col>
                        <h2>Blog</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="imgBlog" />
                    </Col>
                    <Col xs={6}>
                        <h3>Blog informativo sobre desarrollos web</h3>
                        <p>Estamos trabajando en desarrollar un blog donde puedas conocer información relevante sobre una pagina web, sobre las tecnologias con las que trabajamos y mucho mas, informacion que te sera util conocer a la hora de crear tu pagina o aplicacion web.</p>
                    </Col>
                </Row>
            </div>
            <div className="newLogin">
                <Row>
                    <Col>
                        <h2>Plataforma de seguimiento</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="imgBlog" />
                    </Col>
                    <Col xs={6}>
                        <h3>Plataforma para clientes</h3>
                        <p>Queremos que tengas la confianza, seguridad y certeza de que te guiaremos en todo el proceso para digitalizar a tu empresa, nuestro objetivo no es venderte un producto, es brindarte un servicio de excelencia, donde ir viendo avances o consejos donde puedas dar seguimiento sobre la digitalizacion de tu empresa te brindara una perspectiva diferente. Sabemos que hoy en día las tecnologias ya son una realidad en nuestro dia a dia, son una herramienta muy util y nos facilitan muchas actividades.</p>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Soon;