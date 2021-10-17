import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = (props) => {
    const { name, img, price, detail, id } = props.food;
    return (
        <div>
            <Col className="card-hover customize">
                <Link className="text-decoration-none text-black" to={`/home/foods/${id}`}>
                    <Card className="shadow-sm rounded-0" style={{ height: "445px", }}>
                        <Card.Img variant="top" src={img} className="p-2" />
                        <Card.Body>
                            <Card.Title className="p-0 m-0">{name}</Card.Title>
                            <Card.Text>
                                <p>{detail}</p>
                                <p className="p-0 m-0 fs-4 text-danger">${price}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </div >
    );
};

export default Food;