import React from "react";
import { Row } from "react-bootstrap";

const Nosotros = () => {
    return (
        <>
            <div className="weTittle">
                <h1>Nosotros</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident nulla, dicta hic sequi molestias cumque, minus praesentium deserunt, culpa quae voluptate obcaecati amet nobis natus similique quod asperiores eos!</h4>
            </div>
            <div className="myv">
                <Row>
                    <Col xs={6}>
                        <h3>Mision</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam, eaque quia minima culpa repudiandae consequatur quo voluptatibus dolor omnis nemo dolorum numquam tempore nesciunt neque, at ipsa eligendi iste ducimus illo! Obcaecati, dolores incidunt?</p>
                    </Col>
                    <Col xs={6}>
                        <h3>Vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui minus id blanditiis. Ea earum voluptatem, blanditiis nulla recusandae laudantium quas nisi explicabo, libero ab accusantium placeat veritatis? Ratione consequatur, dicta sint modi eligendi harum laboriosam.</p>
                    </Col>
                </Row>
            </div>
            <div className="valores">
                <Row>
                    <Col>
                        <h3>Nuestros Valores</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae et quo omnis! Quisquam assumenda recusandae explicabo natus iure porro tempora impedit voluptatum adipisci reprehenderit?</p>
                    </Col>
                </Row>
            </div>
            <div className="difference">
                <Row>
                    <Col>
                        <h3>Lo que nos hace diferentes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis at beatae fuga perspiciatis quia, veniam veritatis sapiente nemo aliquam.</p>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <Button variant="outline-light">Contactanos</Button>
                </Col>
            </Row>
        </>
    )
};

export default Nosotros;