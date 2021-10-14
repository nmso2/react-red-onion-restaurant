import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Food.css'

const Food = (props) => {
    const { name, img, price, detail } = props.food;
    return (
        <div>
            <Col className="card-hover">
                <Card className="shadow-sm rounded-0" style={{ height: "430px", }}>
                <Card.Img variant="top" src={img} className="p-2" />
                <Card.Body>
                    <Card.Title className="p-0 m-0">{name}</Card.Title>
                    <Card.Text>
                        <p className="p-0 m-0">$ {price}</p>
                        <p>{detail}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>


        </div >
    );
};

export default Food;